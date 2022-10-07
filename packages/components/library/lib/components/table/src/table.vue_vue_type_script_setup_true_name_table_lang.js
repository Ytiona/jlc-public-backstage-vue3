import { defineComponent as x, ref as z, computed as A, onMounted as M, resolveComponent as v, resolveDirective as N, withDirectives as k, openBlock as l, createBlock as i, mergeProps as w, withCtx as d, createElementVNode as g, createElementBlock as h, vShow as T, Fragment as V, renderList as W, unref as j, createSlots as q, renderSlot as L, resolveDynamicComponent as E, h as c, createCommentVNode as O } from "vue";
import { ElButton as B } from "element-plus";
import { getEpTableCommonFns as P } from "../../../utils/ep-table-common.js";
const $ = {
  key: 0,
  class: "table__state"
}, G = /* @__PURE__ */ g("div", null, "\u65E0\u6570\u636E", -1), H = [
  G
], I = {
  key: 1,
  class: "table__state"
}, J = /* @__PURE__ */ g("div", null, "\u7F51\u7EDC\u9519\u8BEF", -1), K = [
  J
], Y = /* @__PURE__ */ x({
  __name: "table",
  props: {
    columns: null,
    loading: { type: Boolean },
    error: { type: Boolean },
    update: { type: Boolean },
    delete: { type: Boolean }
  },
  emits: ["query", "update", "delete"],
  setup(s, { expose: F, emit: _ }) {
    const u = s, p = z(), m = {
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
    }, S = () => {
      const e = [];
      if (u.update && e.push(
        (o) => c(
          B,
          {
            link: !0,
            type: "primary",
            onClick() {
              _("update", o);
            }
          },
          () => "\u7F16\u8F91"
        )
      ), u.delete && e.push(
        (o) => c(
          B,
          {
            link: !0,
            type: "danger",
            onClick() {
              _("delete", o);
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
          render(t, r) {
            return t(
              "div",
              e.map((a) => a(r))
            );
          }
        };
    }, D = A(() => {
      const e = u.columns.map((t) => {
        var a, n;
        const { type: r } = t;
        return {
          ...t,
          ...r in m ? m[r] : {},
          align: t.align || "center",
          resizable: (a = t.resizable) != null ? a : !0,
          minWidth: ((n = t.minWidth) != null ? n : t.label) ? t.label.length * 15 + 24 : 20
        };
      }), o = S();
      return o && e.push(o), e;
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
      Object.assign(f, P(p.value));
    }), F(f), (e, o) => {
      const t = v("el-table-column"), r = v("el-table"), a = N("loading");
      return k((l(), i(r, w({
        ref_key: "tableRef",
        ref: p
      }, e.$attrs, {
        stripe: "",
        border: ""
      }), {
        empty: d(() => [
          k(g("div", null, [
            s.error ? (l(), h("div", I, K)) : (l(), h("div", $, H))
          ], 512), [
            [T, !s.loading]
          ])
        ]),
        default: d(() => [
          (l(!0), h(V, null, W(j(D), (n, R) => (l(), i(t, w({ key: R }, n), q({
            default: d(({ row: y, column: b, $index: C }) => [
              n.slot ? L(e.$slots, n.slot, {
                key: 0,
                row: y,
                column: b,
                index: C
              }) : n.render ? (l(), i(E(n.render(c, y, b, C)), { key: 1 })) : O("", !0)
            ]),
            _: 2
          }, [
            n.header ? {
              name: "header",
              fn: d(() => [
                (l(), i(E(n.header(c))))
              ]),
              key: "0"
            } : void 0
          ]), 1040))), 128))
        ]),
        _: 3
      }, 16)), [
        [a, s.loading]
      ]);
    };
  }
});
export {
  Y as default
};
