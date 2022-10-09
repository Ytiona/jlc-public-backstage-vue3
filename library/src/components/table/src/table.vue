<template>
  <el-table ref="tableRef" v-bind="$attrs" stripe border v-loading="loading">
    <el-table-column v-for="(item, index) in handledColumns" :key="index" v-bind="item">
      <template #default="{ row, column, $index }">
        <slot v-if="item.slot" :name="item.slot" :row="row" :column="column" :index="$index"></slot>
        <component :is="item.render(h, row, column, $index)" v-else-if="item.render" />
      </template>
      <template #header v-if="item.header">
        <component :is="item.header!(h)" />
      </template>
    </el-table-column>
    <template #empty>
      <div v-show="!loading">
        <div class="table__state" v-if="!error">
          <!-- <el-icon :size="50"><MessageBox /></el-icon> -->
          <div>无数据</div>
        </div>
        <div class="table__state" v-else>
          <!-- <el-icon :size="50"><CircleClose /></el-icon> -->
          <div>网络错误</div>
        </div>
      </div>
    </template>
  </el-table>
</template>

<script setup lang="ts" name="table">
  import { VNode, h, Ref } from 'vue'
  import { ElButton } from 'element-plus'
  import { getEpTableCommonFns, EpTableCommonFns } from '@/utils/ep-table-common'
  // import { MessageBox, CircleClose } from '@element-plus/icons-vue'

  import type { AnyObj } from '@/types'
  import type { ElTable, ElTableColumn } from 'element-plus'

  type ElTableType = InstanceType<typeof ElTable>
  type ElTableProps = ElTableType['$props']

  type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props']

  interface Props extends ElTableProps {
    // 表格列
    columns: Column[]
    loading?: boolean
    error?: boolean

    update?: boolean
    delete?: boolean
  }

  interface Emits {
    (e: 'query', params: AnyObj, queryNow: boolean): void
    (e: 'update', row: any): void
    (e: 'delete', row: any): void
  }

  interface Column extends ElTableColumnProps {
    type?: string
    // type?: 'selection' | 'index' | 'expand' | 'date' | 'time' | 'phone'
    header?: (h: any) => VNode
    render?: (h: any, row: AnyObj, column: AnyObj, $index: number) => VNode
    slot?: string
  }

  const props = defineProps<Props>()

  const emit = defineEmits<Emits>()

  const tableRef = ref()

  // 预设type的表格列配置
  const typeConfigMap = {
    date: {
      width: 120,
      align: 'center',
    },
    time: {
      width: 140,
      align: 'center',
    },
    phone: {
      width: 120,
      align: 'center',
    },
  }

  const handleEditAndDelete = () => {
    // 添加对应的编辑和删除列
    interface Render {
      (row: any): VNode
    }
    const operateColumn: Render[] = []
    if (props.update) {
      operateColumn.push((row) =>
        h(
          ElButton,
          {
            link: true,
            type: 'primary',
            onClick() {
              emit('update', row)
            },
          },
          () => '编辑'
        )
      )
    }
    if (props.delete) {
      operateColumn.push((row) =>
        h(
          ElButton,
          {
            link: true,
            type: 'danger',
            onClick() {
              emit('delete', row)
            },
          },
          () => '删除'
        )
      )
    }
    if (operateColumn.length) {
      const width = operateColumn.length * 40 + 40
      return {
        width,
        align: 'center',
        label: '操作',
        fixed: 'right',
        render(h: any, row: AnyObj) {
          return h(
            'div',
            operateColumn.map((render) => render(row))
          )
        },
      }
    }
  }

  // 处理columns，生成element-table需要的
  const handledColumns = computed(() => {
    const result: Column[] = props.columns.map((item) => {
      const { type } = item
      return {
        ...item,
        // 根据type预设一些配置
        ...(type! in typeConfigMap ? typeConfigMap[type as keyof typeof typeConfigMap] : {}),
        align: item.align || 'center',
        resizable: item.resizable ?? true,
        // 默认最小宽度，保证标题不会换行
        minWidth: item.minWidth ?? item.label ? item.label!.length * 15 + 24 : 20,
      }
    })
    const operateColumn = handleEditAndDelete()
    if (operateColumn) {
      result.push(operateColumn)
    }
    return result
  })

  interface ExoprtFns extends EpTableCommonFns {
    epTable: Ref
  }

  const exoprtFns: ExoprtFns = {
    epTable: tableRef,
    clearSelection: () => {},
    getSelectionRows: () => {},
    toggleRowSelection: () => {},
    toggleAllSelection: () => {},
    toggleRowExpansion: () => {},
    setCurrentRow: () => {},
  }

  // 将element-plus表格的一些常用方法取出来
  onMounted(() => {
    Object.assign(exoprtFns, getEpTableCommonFns(tableRef.value))
  })

  defineExpose(exoprtFns)
</script>

<style scoped lang="scss">
@import './table.scss';
</style>
