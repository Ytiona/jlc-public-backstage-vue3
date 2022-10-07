<template>
  <layout>
    <template #filter>
      <j-filter
        ref="filterRef"
        v-bind="filterProps"
        v-on="filterEvents"
        :filters="filters"
        @query="onFilterQuery"
        @reset="onFilterReset"
      >
        <template v-for="slot in filterSlots" #[slot]="{ bindForm }">
          <slot :name="slot" :bind-form="bindForm" />
        </template>
      </j-filter>
    </template>
    <template #filter-bottom>
      <slot name="filter-bottom"></slot>
    </template>
    <template #list>
      <j-table
        ref="tableRef"
        v-bind="tableProps"
        v-on="withCommonTableEvents"
        :columns="columns"
        :data="data"
        :loading="loading"
        :error="error"
        @query="onTableQuery"
      >
        <template v-for="slot in tableSlots" #[slot]="{ row, column, index }">
          <slot :name="slot" :row="row" :column="column" :index="index"></slot>
        </template>
      </j-table>
    </template>
    <template #table-bottom>
      <slot name="table-bottom"></slot>
    </template>
    <template #page v-if="page">
      <j-page
        ref="pageRef"
        v-bind="pageProps"
        v-on="pageEvents"
        :total="total"
        @query="onPageQuery"
      />
    </template>
  </layout>
</template>

<script setup lang="ts" name="pro-table">
  import { useAttrs, computed, ref, onMounted, Ref } from 'vue'

  import Layout from '@/layouts/filter-page-list.vue'
  import JFilter from '@/components/filter'
  import JTable from '@/components/table'
  import JPage from '@/components/page'
  import useFilterPage from '@/hooks/use-filter-page'
  import { getOptionSlots } from './utils'
  import {
    getEpTableCommonFns,
    EpTableCommonFns,
    EpTableCommonEvents,
    getEpTableCommonEvents,
  } from '@/utils/ep-table-common'

  import type { Data } from '@/types'

  type FilterType = InstanceType<typeof JFilter>
  type FilterProps = FilterType['$props']

  type TableType = InstanceType<typeof JTable>
  type TableProps = TableType['$props']

  type PageType = InstanceType<typeof JPage>
  type PageProps = PageType['$props']

  interface Events {
    [key: string]: (...args: any[]) => any
  }

  interface Emit extends EpTableCommonEvents {
    (e: 'get-data', retValue: Promise<Data> | Data): void
    (e: 'got-data', response: unknown): void
  }

  const props = withDefaults(
    defineProps<{
      filters?: FilterProps['filters']
      columns?: TableProps['columns']
      getData: (params?: any) => Promise<Data> | Data
      initGet?: boolean
      page?: boolean

      filterProps?: Partial<FilterProps>
      filterEvents?: Events

      tableProps?: Partial<TableProps>
      tableEvents?: Events

      pageProps?: Partial<PageProps>
      pageEvents?: Events
    }>(),
    {
      filters: () => [],
      columns: () => [],
      initGet: true,
      page: true,

      filterProps: (): any => ({}),
      filterEvents: (): any => ({}),

      tableProps: (): any => ({}),
      tableEvents: (): any => ({}),

      pageProps: (): any => ({}),
      pageEvents: (): any => ({}),
    }
  )
  const emit = defineEmits<Emit>()

  const attrs = useAttrs()

  const withCommonTableEvents = computed(() => {
    return Object.assign({}, props.tableEvents, getEpTableCommonEvents(attrs))
  })

  const tableParams = ref({})

  const {
    filterRef,
    pageRef,
    total,
    data,
    loading,
    error,
    query,
    refresh,
    onFilterQuery,
    onFilterReset,
    onPageQuery,
  } = useFilterPage({ props, emit, params: tableParams })

  const tableRef = ref()

  const onTableQuery = (params: any, queryNow: boolean) => {
    tableParams.value = params || {}
    queryNow && query()
  }

  const filterSlots = computed(() => getOptionSlots(props.filters))
  const tableSlots = computed(() => getOptionSlots(props.columns))

  interface ExoprtFns {
    refresh: Function
    filter: Ref<{
      query: FilterType['query']
      reset: FilterType['reset']
      epForm: FilterType['epForm']
    }>
    table: Ref<{
      epTable: TableType['epTable']
    }>
    page: Ref<{
      reset: PageType['reset']
    }>
  }

  const exoprtFns: ExoprtFns & EpTableCommonFns = {
    refresh,
    filter: filterRef,
    table: tableRef,
    page: pageRef,
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
