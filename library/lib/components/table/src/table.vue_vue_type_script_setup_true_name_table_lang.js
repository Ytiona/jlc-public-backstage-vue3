import { defineComponent as I, ref as z, computed as A, onMounted as M, resolveComponent as C, resolveDirective as N, withDirectives as k, openBlock as r, createBlock as d, mergeProps as w, withCtx as i, createElementVNode as g, createElementBlock as h, vShow as T, Fragment as V, renderList as W, unref as j, createSlots as q, renderSlot as L, resolveDynamicComponent as E, h as c, createCommentVNode as O, pushScopeId as P, popScopeId as $ } from "vue";
import { ElButton as S } from "element-plus";
import { getEpTableCommonFns as G } from "../../../utils/ep-table-common.js";
const B = (o) => (P("data-v-836d8d54"), o = o(), $(), o), H = {
  key: 0,
  class: "table__state"
}, J = /* @__PURE__ */ B(() => /* @__PURE__ */ g("div", null, "\u65E0\u6570\u636E", -1)), K = [
  J
], Q = {
  key: 1,
  class: "table__state"
}, U = /* @__PURE__ */ B(() => /* @__PURE__ */ g("div", null, "\u7F51\u7EDC\u9519\u8BEF", -1)), X = [
  U
], te = /* @__PURE__ */ I({
  __name: "table",
  props: {
    columns: null,
    loading: { type: Boolean },
    error: { type: Boolean },
    update: { type: Boolean },
    delete: { type: Boolean }
  },
  emits: ["query", "update", "delete"],
  setup(o, { expose: F, emit: _ }) {
    const u = o, p = z(), m = {
      date: {
        width: 120,
        align: "center"
      },
      time: {
        width: 140,
        align: "center"
      },
      phone: {
        width: 120,
        align: "center"
      }
    }, D = () => {
      const e = [];
      if (u.update && e.push(
        (l) => c(
          S,
          {
            link: !0,
            type: "primary",
            onClick() {
              _("update", l);
            }
          },
          () => "\u7F16\u8F91"
        )
      ), u.delete && e.push(
        (l) => c(
          S,
          {
            link: !0,
            type: "danger",
            onClick() {
              _("delete", l);
            }
          },
          () => "\u5220\u9664"
        )
      ), e.length)
        return {
          width: e.length * 40 + 40,
          align: "center",
          label: "\u64CD\u4F5C",
          fixed: "right",
          render(t, a) {
            return t(
              "div",
              e.map((s) => s(a))
            );
          }
        };
    }, R = A(() => {
      const e = u.columns.map((t) => {
        var s, n;
        const { type: a } = t;
        return {
          ...t,
          ...a in m ? m[a] : {},
          align: t.align || "center",
          resizable: (s = t.resizable) != null ? s : !0,
          minWidth: ((n = t.minWidth) != null ? n : t.label) ? t.label.length * 15 + 24 : 20
        };
      }), l = D();
      return l && e.push(l), e;
    }), f = {
      epTable: p,
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
      Object.assign(f, G(p.value));
    }), F(f), (e, l) => {
      const t = C("el-table-column"), a = C("el-table"), s = N("loading");
      return k((r(), d(a, w({
        ref_key: "tableRef",
        ref: p
      }, e.$attrs, {
        stripe: "",
        border: ""
      }), {
        empty: i(() => [
          k(g("div", null, [
            o.error ? (r(), h("div", Q, X)) : (r(), h("div", H, K))
          ], 512), [
            [T, !o.loading]
          ])
        ]),
        default: i(() => [
          (r(!0), h(V, null, W(j(R), (n, x) => (r(), d(t, w({ key: x }, n), q({
            default: i(({ row: y, column: b, $index: v }) => [
              n.slot ? L(e.$slots, n.slot, {
                key: 0,
                row: y,
                column: b,
                index: v
              }, void 0, !0) : n.render ? (r(), d(E(n.render(c, y, b, v)), { key: 1 })) : O("", !0)
            ]),
            _: 2
          }, [
            n.header ? {
              name: "header",
              fn: i(() => [
                (r(), d(E(n.header(c))))
              ]),
              key: "0"
            } : void 0
          ]), 1040))), 128))
        ]),
        _: 3
      }, 16)), [
        [s, o.loading]
      ]);
    };
  }
});
export {
  te as default
};
