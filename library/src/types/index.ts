export interface AnyObj {
  [key: string]: any
}

export interface PageList<T> {
  pageNum: number
  totalRow: number
  list: T[]
}

export interface PageParams {
  pageNum: number
  pageSize: number
}

export interface Data {
  list: unknown[]
  total?: number
}
