import { DEFAULT_PAGE_SIZE } from '@/constants'

import type { Ref } from 'vue'
import type { Data } from '@/types'

interface Params {
  props: {
    page?: boolean
    getData?: Function
    initGet?: boolean
  }
  emit: {
    (e: 'get-data', retValue: Promise<Data> | Data): void
    (e: 'got-data', response: unknown): void
  }
  params: Ref
}

const useFilterPage = ({ props, emit, params }: Params) => {
  const filterRef = ref()
  const pageRef = ref()

  const total = ref(0)
  const data = ref<unknown[]>([])
  const loading = ref(false)
  const error = ref(false)

  const filterParams = ref({})

  const pageParams = ref({})
  const queryParams = computed(() => {
    const pageInfo = {
      pageNum: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      ...pageParams.value,
    }
    const result = {
      ...filterParams.value,
      ...params.value,
    }
    if (props.page) {
      Object.assign(result, pageInfo)
    }
    return result
  })

  const onFilterQuery = (params: any, queryNow: boolean) => {
    filterParams.value = params || {}
    queryNow && query()
  }
  const onFilterReset = (params: any, queryNow: boolean) => {
    filterParams.value = params || {}
    if (pageRef.value) {
      pageRef.value.reset(false)
    }
    queryNow && query()
  }

  const onPageQuery = (params: any, queryNow: boolean) => {
    pageParams.value = params || {}
    queryNow && query()
  }

  const refresh = (resetPage = false): void => {
    filterRef.value.reset(false)
    if (resetPage) {
      pageRef.value.reset(false)
    }
    query()
  }

  const query = () => {
    if (!props.getData) return
    const retValue = props.getData(queryParams.value)
    if (retValue instanceof Promise) {
      loading.value = true
      handleQuery(retValue)
    } else {
      handleQueryData(retValue)
    }

    emit('get-data', retValue)
  }

  let queryTaskCount = 0
  const handleQuery = (promise: Promise<Data>) => {
    queryTaskCount++
    promise
      .then((res) => {
        handleQueryData(res)
      })
      .catch(() => {
        if (queryTaskCount <= 1) {
          data.value = []
          error.value = true
          total.value = 0
        }
      })
      .finally(() => {
        if (queryTaskCount <= 1) {
          loading.value = false
        }
        queryTaskCount--
      })
  }

  const handleQueryData = (queryData: Data) => {
    data.value = queryData.list
    total.value = queryData.total || 0
    error.value = false
    emit('got-data', queryData)
  }

  if (props.initGet) {
    query()
  }

  return {
    filterRef,
    pageRef,

    total,
    data,
    loading,
    error,

    onFilterQuery,
    onFilterReset,
    onPageQuery,
    refresh,
    query,
    handleQuery,
    handleQueryData,
  }
}

export default useFilterPage
