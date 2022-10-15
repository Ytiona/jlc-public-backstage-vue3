import type { ElPagination } from 'element-plus';
export interface PageInfo {
    pageNum: number;
    pageSize: number;
}
export declare type ElPageType = InstanceType<typeof ElPagination>;
export declare type ElPageProps = ElPageType['$props'];
export interface Props extends Partial<ElPageProps> {
}
export interface Emits {
    (e: 'query', params: PageInfo, queryNow: boolean): void;
}
declare const _sfc_main: import("vue").DefineComponent<{}, {
    emit: (e: 'query', params: PageInfo, queryNow: boolean) => void;
    DEFAULT_CURRENT_PAGE: number;
    attrs: {
        [x: string]: unknown;
    };
    initPageInfo: {
        pageNum: number;
        pageSize: number;
    };
    pageInfo: PageInfo;
    onCurrentChange: (current: number) => void;
    onSizeChange: (size: number) => void;
    query: (queryNow?: boolean) => void;
    reset: (queryNow?: boolean, resetSize?: boolean) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "query"[], "query", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onQuery?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
