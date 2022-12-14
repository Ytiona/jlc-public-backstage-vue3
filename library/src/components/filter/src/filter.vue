<template>
  <el-form ref="formRef" :model="bindForm" v-bind="$attrs" @submit.prevent class="filter__form">
    <el-form-item
      v-for="item in handledFilters"
      :prop="item.key"
      :label="item.label"
      :key="item.key"
      :style="filterItemStyle"
      class="filter__form__item"
    >
      <!-- 插槽 -->
      <slot v-if="item.slot" :name="item.slot" :bind-form="bindForm" />
      <component
        :is="item.component"
        v-else
        v-model="bindForm[item.key]"
        v-bind="(item.attrs as any)"
        v-on="(item.events as any)"
        class="w-full"
        @keydown.enter="onEnter(item)"
      >
        <!-- 子组件 -->
        <template v-if="item.children">
          <component
            :is="child.component"
            v-for="(child, index) in item.children"
            :key="index"
            v-bind="(child.attrs as any)"
            v-on="(child.events as any)"
          >
            <!-- 子组件内容render -->
            <component :is="child.render(bindForm)" v-if="child.render" />
            <!-- 子组件内容 -->
            <template v-else-if="child.content">{{ child.content }}</template>
          </component>
        </template>
        <!-- v-if不成立时，打包之后仍然会占据date-picker的默认插槽，以下临时处理方案 -->
        <template v-if="item.component === 'el-date-picker'" #default="{ text }: { text: string }">
          <div class="el-date-table-cell">
            <span class="el-date-table-cell__text">{{ text }}</span>
          </div>
        </template>
      </component>
    </el-form-item>
    <div class="filter__ctrl">
      <el-button type="primary" @click="query(true)">查询</el-button>
      <el-button type="info" @click="reset(true)">重置</el-button>
    </div>
  </el-form>
</template>

<script setup lang="ts" name="filter">
  import { ref, computed, watch, VNode } from 'vue'
  import { compose } from '@/utils/tools'
  import merge from 'lodash/merge'
  import cloneDeep from 'lodash/cloneDeep'

  import type { ElForm } from 'element-plus'
  import type { AnyObj } from '@/types'

  type FnObj = {
    [key: string]: (event?: any) => any
  }

  interface FilterItem {
    component?: string
    key: string | string[]
    value?: any
    label?: string
    type?: string
    attrs?: object
    events?: FnObj
    slot?: string
    trim?: boolean
    transform?: (value: any) => any
    flatTransform?: boolean
    enterQuery?: boolean
    clearable?: boolean
    children?: {
      component: string
      content?: string
      render?: (bindForm?: object) => VNode
      attrs?: object
      events?: FnObj
    }[]
  }

  type ElFormType = InstanceType<typeof ElForm>
  type ElFormProps = ElFormType['$props']

  interface Props extends Partial<ElFormProps> {
    // 表单配置
    filters: FilterItem[]
    columnCount?: number
  }

  interface Emits {
    // 点击查询
    (e: 'query', params: AnyObj, queryNow: boolean): void
    // 点击重置
    (e: 'reset', params: AnyObj, queryNow: boolean): void
  }

  const props = withDefaults(defineProps<Props>(), {
    columnCount: 5,
  })

  const emit = defineEmits<Emits>()

  const formRef = ref()

  const bindForm: AnyObj = reactive({})
  const filterParams: AnyObj = {}

  // 处理默认值
  const handleDefaultValue = (filterItem: FilterItem) => {
    const defaultMap = {
      component: 'el-input',
      attrs: {
        clearable: true,
      },
      events: {},
      flatTransform: true,
      enterQuery: true,
    }
    return merge({}, defaultMap, filterItem)
  }

  // 处理范围时间类型的filter项
  const handleRangeTime = (filterItem: FilterItem) => {
    const { label, key, type, value = [], transform } = filterItem
    if (type !== 'rangeTime') return filterItem
    const [startField, endField] = key
    const res = [
      {
        label,
        transform,
        component: 'el-date-picker',
        key: startField,
        value: value[0],
        attrs: {
          placeholder: '开始时间',
          type: 'datetime',
          disabledDate(date: Date) {
            return new Date(date).getTime() > new Date(bindForm[endField]).getTime()
          },
        },
      },
      {
        label: '至',
        transform,
        component: 'el-date-picker',
        key: endField,
        value: value[1],
        attrs: {
          placeholder: '结束时间',
          type: 'datetime',
          disabledDate(date: Date) {
            return new Date(date).getTime() < new Date(bindForm[startField]).getTime()
          },
        },
      },
    ]
    return res
  }

  // 处理后的FilterList
  const handledFilters = computed(() => {
    let result: ({ key: string } & FilterItem)[] = []
    props.filters.forEach((item) => {
      // compose将handler集合串联执行，非常方便后续扩展和修改
      result = result.concat(compose(handleRangeTime, handleDefaultValue)(item))
    })
    return result
  })

  const filtersMap: { [key: string]: FilterItem } = {}

  // 获取绑定form转换后的值
  const getTransformValues = () => {
    const result: { [key: string]: any } = {}
    Object.keys(filtersMap).forEach((key) => {
      if (!filtersMap[key]) return
      // 深度克隆初始值，避免影响原值
      const value = cloneDeep(bindForm[key])
      const { transform, flatTransform, trim } = filtersMap[key]
      if (transform) {
        const transformVal = transform(value)
        // 将transform返回的对象拉平，赋值到result
        if (flatTransform && typeof transformVal === 'object') {
          Object.assign(result, transformVal)
        } else {
          result[key] = transformVal
        }
      } else if (trim && typeof value === 'string') {
        // 配置了trim且当前值类型为string，则执行trim
        result[key] = value.trim()
      } else {
        result[key] = value
      }
    })
    return result
  }

  // 同步到filterParams
  const syncFilterParams = () => {
    const transformValues = getTransformValues()
    Object.assign(filterParams, transformValues)
    return transformValues
  }

  // 初始化值
  const handleInitValue = () => {
    handledFilters.value.forEach((item) => {
      const { key, value } = item
      bindForm[key] = cloneDeep(value)
    })
  }

  // 查询
  const query = (queryNow = true) => {
    const transformValues = syncFilterParams()
    emit('query', transformValues, queryNow)
  }

  // 重置
  const reset = (queryNow = true) => {
    handleInitValue()
    const transformValues = syncFilterParams()
    emit('reset', transformValues, queryNow)
  }

  // 监听回车
  const onEnter = (filterItem: FilterItem) => {
    if (filterItem.enterQuery) {
      query()
    }
  }

  const filterItemStyle = computed(() => {
    const { columnCount } = props
    const percentage = 100 / columnCount
    return {
      width: `${percentage}%`,
      minWidth: `${percentage}%`,
    }
  })

  // 监听filterList，以同步查询值
  watch(
    handledFilters,
    (filters) => {
      const oldKeys = new Set(Object.keys(filtersMap))

      filters.forEach((item) => {
        oldKeys.delete(item.key as string)

        // 添加新增的filter
        if (!filtersMap[item.key as string]) {
          filtersMap[item.key as string] = item
          bindForm[item.key as string] = cloneDeep(item.value)
        }
      })

      // 移除掉不存在的filter
      oldKeys.forEach((key) => {
        delete filterParams[key]
        delete bindForm[key]
      })

      syncFilterParams()
    },
    {
      immediate: true,
    }
  )

  // 初始化
  const init = () => {
    syncFilterParams()
  }

  init()

  defineExpose({
    query,
    reset,
    epForm: formRef,
  })
</script>

<style lang="scss" scoped>
@import './filter.scss';
</style>
