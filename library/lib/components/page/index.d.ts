declare const _default: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & {
            onQuery?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "query", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>> & {
            onQuery?: ((...args: any[]) => any) | undefined;
        }, {
            emit: (e: "query", params: import("./src/page.vue").PageInfo, queryNow: boolean) => void;
            DEFAULT_CURRENT_PAGE: number;
            attrs: {
                [x: string]: unknown;
            };
            initPageInfo: {
                pageNum: number;
                pageSize: number;
            };
            pageInfo: import("./src/page.vue").PageInfo;
            onCurrentChange: (current: number) => void;
            onSizeChange: (size: number) => void;
            query: (queryNow?: boolean) => void;
            reset: (queryNow?: boolean, resetSize?: boolean) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "query"[], string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{}>> & {
        onQuery?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        emit: (e: "query", params: import("./src/page.vue").PageInfo, queryNow: boolean) => void;
        DEFAULT_CURRENT_PAGE: number;
        attrs: {
            [x: string]: unknown;
        };
        initPageInfo: {
            pageNum: number;
            pageSize: number;
        };
        pageInfo: import("./src/page.vue").PageInfo;
        onCurrentChange: (current: number) => void;
        onSizeChange: (size: number) => void;
        query: (queryNow?: boolean) => void;
        reset: (queryNow?: boolean, resetSize?: boolean) => void;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>> & {
    onQuery?: ((...args: any[]) => any) | undefined;
}, {
    emit: (e: "query", params: import("./src/page.vue").PageInfo, queryNow: boolean) => void;
    DEFAULT_CURRENT_PAGE: number;
    attrs: {
        [x: string]: unknown;
    };
    initPageInfo: {
        pageNum: number;
        pageSize: number;
    };
    pageInfo: import("./src/page.vue").PageInfo;
    onCurrentChange: (current: number) => void;
    onSizeChange: (size: number) => void;
    query: (queryNow?: boolean) => void;
    reset: (queryNow?: boolean, resetSize?: boolean) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "query"[], "query", {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin) & Record<string, any>;
export default _default;
