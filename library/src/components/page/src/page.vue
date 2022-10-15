<template>
  <el-pagination
    v-bind="$attrs"
    :current-page="pageInfo.pageNum"
    :page-size="pageInfo.pageSize"
    @update:current-page="onCurrentChange"
    @update:page-size="onSizeChange"
    background
    layout="total, sizes, prev, pager, next, jumper"
  />
</template>

<script setup lang="ts" name="page">
  import { useAttrs } from 'vue'
  import { DEFAULT_PAGE_SIZE } from '@/constants'

  import type { ElPagination } from 'element-plus'

  export interface PageInfo {
    pageNum: number
    pageSize: number
  }

  export type ElPageType = InstanceType<typeof ElPagination>
    export type ElPageProps = ElPageType['$props']

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Props extends Partial<ElPageProps> {}

  export interface Emits {
    (e: 'query', params: PageInfo, queryNow: boolean): void
  }

  defineProps<Props>()

  const emit = defineEmits<Emits>()

  const DEFAULT_CURRENT_PAGE = 1

  const attrs = useAttrs()

  const initPageInfo = {
    pageNum: (attrs.defaultCurrentPage as number) || DEFAULT_CURRENT_PAGE,
    pageSize: (attrs.defaultPageSize as number) || DEFAULT_PAGE_SIZE,
  }

  const pageInfo: PageInfo = reactive({ ...initPageInfo })

  const onCurrentChange = (current: number) => {
    pageInfo.pageNum = current
    query()
  }

  const onSizeChange = (size: number) => {
    pageInfo.pageSize = size
    query()
  }

  const query = (queryNow = true) => {
    emit(
      'query',
      {
        pageNum: pageInfo.pageNum,
        pageSize: pageInfo.pageSize,
      },
      queryNow
    )
  }

  const reset = (queryNow = true, resetSize = false) => {
    pageInfo.pageNum = initPageInfo.pageNum
    if (resetSize) {
      pageInfo.pageSize = initPageInfo.pageSize
    }
    query(queryNow)
  }

  defineExpose({
    reset,
  })
</script>
