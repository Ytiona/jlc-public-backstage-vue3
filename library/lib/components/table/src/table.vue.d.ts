import { VNode, h, Ref } from 'vue';
import { EpTableCommonFns } from '../../../utils/ep-table-common';
import type { AnyObj } from '../../../types';
import type { ElTableColumn } from 'element-plus';
declare type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props'];
interface Column extends ElTableColumnProps {
    type?: string;
    header?: (h: any) => VNode;
    render?: (h: any, row: AnyObj, column: AnyObj, $index: number) => VNode;
    slot?: string;
}
interface ExoprtFns extends EpTableCommonFns {
    epTable: Ref;
}
declare const _sfc_main: import("vue").DefineComponent<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    error: {
        type: BooleanConstructor;
        required: false;
    };
    update: {
        type: BooleanConstructor;
        required: false;
    };
    delete: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    emit: {
        (e: 'query', params: AnyObj, queryNow: boolean): void;
        (e: 'update', row: any): void;
        (e: 'delete', row: any): void;
    };
    tableRef: Ref<any>;
    typeConfigMap: {
        date: {
            width: number;
            align: string;
        };
        time: {
            width: number;
            align: string;
        };
        phone: {
            width: number;
            align: string;
        };
    };
    handleEditAndDelete: () => {
        width: number;
        align: string;
        label: string;
        fixed: string;
        render(h: any, row: AnyObj): any;
    } | undefined;
    handledColumns: import("vue").ComputedRef<Column[]>;
    exoprtFns: ExoprtFns;
    h: typeof h;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("query" | "update" | "delete")[], "query" | "update" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: ArrayConstructor;
        required: true;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    error: {
        type: BooleanConstructor;
        required: false;
    };
    update: {
        type: BooleanConstructor;
        required: false;
    };
    delete: {
        type: BooleanConstructor;
        required: false;
    };
}>> & {
    onQuery?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
}, {
    update: boolean;
    delete: boolean;
    loading: boolean;
    error: boolean;
}>;
export default _sfc_main;
