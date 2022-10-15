import { VNode } from 'vue';
import type { AnyObj } from '../../../types';
declare type FnObj = {
    [key: string]: (event?: any) => any;
};
interface FilterItem {
    component?: string;
    key: string | string[];
    value?: any;
    label?: string;
    type?: string;
    attrs?: object;
    events?: FnObj;
    slot?: string;
    trim?: boolean;
    transform?: (value: any) => any;
    flatTransform?: boolean;
    enterQuery?: boolean;
    clearable?: boolean;
    children?: {
        component: string;
        content?: string;
        render?: (bindForm?: object) => VNode;
        attrs?: object;
        events?: FnObj;
    }[];
}
declare const _sfc_main: import("vue").DefineComponent<{
    filters: {
        type: ArrayConstructor;
        required: true;
    };
    columnCount: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    props: any;
    emit: {
        (e: 'query', params: AnyObj, queryNow: boolean): void;
        (e: 'reset', params: AnyObj, queryNow: boolean): void;
    };
    formRef: import("vue").Ref<any>;
    bindForm: AnyObj;
    filterParams: AnyObj;
    handleDefaultValue: (filterItem: FilterItem) => {
        component: string;
        attrs: {
            clearable: boolean;
        };
        events: {};
        flatTransform: boolean;
        enterQuery: boolean;
    } & FilterItem;
    handleRangeTime: (filterItem: FilterItem) => FilterItem | {
        label: string | undefined;
        transform: ((value: any) => any) | undefined;
        component: string;
        key: string;
        value: any;
        attrs: {
            placeholder: string;
            type: string;
            disabledDate(date: Date): boolean;
        };
    }[];
    handledFilters: import("vue").ComputedRef<({
        key: string;
    } & FilterItem)[]>;
    filtersMap: {
        [key: string]: FilterItem;
    };
    getTransformValues: () => {
        [key: string]: any;
    };
    syncFilterParams: () => {
        [key: string]: any;
    };
    handleInitValue: () => void;
    query: (queryNow?: boolean) => void;
    reset: (queryNow?: boolean) => void;
    onEnter: (filterItem: FilterItem) => void;
    filterItemStyle: import("vue").ComputedRef<{
        width: string;
        minWidth: string;
    }>;
    init: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("query" | "reset")[], "query" | "reset", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    filters: {
        type: ArrayConstructor;
        required: true;
    };
    columnCount: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    onQuery?: ((...args: any[]) => any) | undefined;
    onReset?: ((...args: any[]) => any) | undefined;
}, {
    columnCount: number;
}>;
export default _sfc_main;
