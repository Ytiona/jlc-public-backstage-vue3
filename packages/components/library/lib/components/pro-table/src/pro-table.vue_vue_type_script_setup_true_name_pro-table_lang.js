import { defineComponent as G, useAttrs as H, computed as i, ref as v, onMounted as M, openBlock as N, createBlock as V, createSlots as u, withCtx as o, createVNode as m, unref as e, mergeProps as g, toHandlers as c, renderList as E, renderSlot as n } from "vue";
import z from "../../../layouts/filter-page-list.js";
import I from "../../filter/index.js";
import K from "../../table/index.js";
import U from "../../page/index.js";
import W from "../../../hooks/use-filter-page.js";
import { getOptionSlots as P } from "./utils.js";
import { getEpTableCommonEvents as X, getEpTableCommonFns as Y } from "../../../utils/ep-table-common.js";
const ne = /* @__PURE__ */ G({
  __name: "pro-table",
  props: {
    filters: { default: () => [] },
    columns: { default: () => [] },
    getData: null,
    initGet: { type: Boolean, default: !0 },
    page: { type: Boolean, default: !0 },
    filterProps: { default: () => ({}) },
    filterEvents: { default: () => ({}) },
    tableProps: { default: () => ({}) },
    tableEvents: { default: () => ({}) },
    pageProps: { default: () => ({}) },
    pageEvents: { default: () => ({}) }
  },
  emits: ["get-data", "got-data"],
  setup(t, { expose: S, emit: Q }) {
    const a = t, k = H(), w = i(() => Object.assign({}, a.tableEvents, X(k))), d = v({}), {
      filterRef: p,
      pageRef: b,
      total: C,
      data: F,
      loading: T,
      error: h,
      query: B,
      refresh: $,
      onFilterQuery: J,
      onFilterReset: O,
      onPageQuery: j
    } = W({ props: a, emit: Q, params: d }), s = v(), A = (r, R) => {
      d.value = r || {}, R && B();
    }, L = i(() => P(a.filters)), q = i(() => P(a.columns)), y = {
      refresh: $,
      filter: p,
      table: s,
      page: b,
      clearSelection: () => {
      },
      getSelectionRows: () => {
      },
      toggleRowSelection: () => {
      },
      toggleAllSelection: () => {
      },
      toggleRowExpansion: () => {
      },
      setCurrentRow: () => {
      }
    };
    return M(() => {
      Object.assign(y, Y(s.value));
    }), S(y), (r, R) => (N(), V(z, null, u({
      filter: o(() => [
        m(e(I), g({
          ref_key: "filterRef",
          ref: p
        }, t.filterProps, c(t.filterEvents), {
          filters: t.filters,
          onQuery: e(J),
          onReset: e(O)
        }), u({ _: 2 }, [
          E(e(L), (l) => ({
            name: l,
            fn: o(({ bindForm: f }) => [
              n(r.$slots, l, { bindForm: f })
            ])
          }))
        ]), 1040, ["filters", "onQuery", "onReset"])
      ]),
      "filter-bottom": o(() => [
        n(r.$slots, "filter-bottom")
      ]),
      list: o(() => [
        m(e(K), g({
          ref_key: "tableRef",
          ref: s
        }, t.tableProps, c(e(w)), {
          columns: t.columns,
          data: e(F),
          loading: e(T),
          error: e(h),
          onQuery: A
        }), u({ _: 2 }, [
          E(e(q), (l) => ({
            name: l,
            fn: o(({ row: f, column: x, index: D }) => [
              n(r.$slots, l, {
                row: f,
                column: x,
                index: D
              })
            ])
          }))
        ]), 1040, ["columns", "data", "loading", "error"])
      ]),
      "table-bottom": o(() => [
        n(r.$slots, "table-bottom")
      ]),
      _: 2
    }, [
      t.page ? {
        name: "page",
        fn: o(() => [
          m(e(U), g({
            ref_key: "pageRef",
            ref: b
          }, t.pageProps, c(t.pageEvents), {
            total: e(C),
            onQuery: e(j)
          }), null, 16, ["total", "onQuery"])
        ]),
        key: "0"
      } : void 0
    ]), 1024));
  }
});
export {
  ne as default
};
