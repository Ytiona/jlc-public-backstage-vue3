import { defineComponent as I, ref as L, reactive as W, computed as $, watch as A, resolveComponent as k, openBlock as s, createBlock as d, mergeProps as v, withModifiers as G, withCtx as u, createElementBlock as b, Fragment as g, renderList as j, unref as B, normalizeStyle as J, renderSlot as X, resolveDynamicComponent as F, toHandlers as K, withKeys as Y, createSlots as Z, createTextVNode as V, toDisplayString as M, createCommentVNode as N, createElementVNode as w, createVNode as O } from "vue";
import { compose as ee } from "../../../utils/tools.js";
import te from "lodash/merge";
import D from "lodash/cloneDeep";
const re = { class: "el-date-table-cell" }, ne = { class: "el-date-table-cell__text" }, oe = { class: "filter__ctrl" }, de = /* @__PURE__ */ I({
  __name: "filter",
  props: {
    filters: null,
    columnCount: { default: 5 }
  },
  emits: ["query", "reset"],
  setup(q, { expose: x, emit: E }) {
    const h = q, C = L(), l = W({}), T = {}, P = (e) => te({}, {
      component: "el-input",
      attrs: {
        clearable: !0
      },
      events: {},
      flatTransform: !0,
      enterQuery: !0
    }, e), R = (e) => {
      const { label: t, key: n, type: a, value: f = [], transform: r } = e;
      if (a !== "rangeTime")
        return e;
      const [o, i] = n;
      return [
        {
          label: t,
          transform: r,
          component: "el-date-picker",
          key: o,
          value: f[0],
          attrs: {
            placeholder: "\u5F00\u59CB\u65F6\u95F4",
            type: "datetime",
            disabledDate(_) {
              return new Date(_).getTime() > new Date(l[i]).getTime();
            }
          }
        },
        {
          label: "\u81F3",
          transform: r,
          component: "el-date-picker",
          key: i,
          value: f[1],
          attrs: {
            placeholder: "\u7ED3\u675F\u65F6\u95F4",
            type: "datetime",
            disabledDate(_) {
              return new Date(_).getTime() < new Date(l[o]).getTime();
            }
          }
        }
      ];
    }, p = $(() => {
      let e = [];
      return h.filters.forEach((t) => {
        e = e.concat(ee(R, P)(t));
      }), e;
    }), c = {}, Q = () => {
      const e = {};
      return Object.keys(c).forEach((t) => {
        if (!c[t])
          return;
        const n = D(l[t]), { transform: a, flatTransform: f, trim: r } = c[t];
        if (a) {
          const o = a(n);
          f && typeof o == "object" ? Object.assign(e, o) : e[t] = o;
        } else
          r && typeof n == "string" ? e[t] = n.trim() : e[t] = n;
      }), e;
    }, m = () => {
      const e = Q();
      return Object.assign(T, e), e;
    }, U = () => {
      p.value.forEach((e) => {
        const { key: t, value: n } = e;
        l[t] = D(n);
      });
    }, y = (e = !0) => {
      const t = m();
      E("query", t, e);
    }, S = (e = !0) => {
      U();
      const t = m();
      E("reset", t, e);
    }, z = (e) => {
      e.enterQuery && y();
    }, H = $(() => {
      const { columnCount: e } = h, t = 100 / e;
      return {
        width: `${t}%`,
        minWidth: `${t}%`
      };
    });
    return A(
      p,
      (e) => {
        const t = new Set(Object.keys(c));
        e.forEach((n) => {
          t.delete(n.key), c[n.key] || (c[n.key] = n, l[n.key] = D(n.value));
        }), t.forEach((n) => {
          delete T[n], delete l[n];
        }), m();
      },
      {
        immediate: !0
      }
    ), (() => {
      m();
    })(), x({
      query: y,
      reset: S,
      epForm: C
    }), (e, t) => {
      const n = k("el-form-item"), a = k("el-button"), f = k("el-form");
      return s(), d(f, v({
        ref_key: "formRef",
        ref: C,
        model: l
      }, e.$attrs, {
        onSubmit: t[2] || (t[2] = G(() => {
        }, ["prevent"])),
        class: "filter__form"
      }), {
        default: u(() => [
          (s(!0), b(g, null, j(B(p), (r) => (s(), d(n, {
            prop: r.key,
            label: r.label,
            key: r.key,
            style: J(B(H)),
            class: "filter__form__item"
          }, {
            default: u(() => [
              r.slot ? X(e.$slots, r.slot, {
                key: 0,
                bindForm: l
              }, void 0, !0) : (s(), d(F(r.component), v({
                key: 1,
                modelValue: l[r.key],
                "onUpdate:modelValue": (o) => l[r.key] = o
              }, r.attrs, K(r.events), {
                class: "w-full",
                onKeydown: Y((o) => z(r), ["enter"])
              }), Z({
                default: u(() => [
                  r.children ? (s(!0), b(g, { key: 0 }, j(r.children, (o, i) => (s(), d(F(o.component), v({ key: i }, o.attrs, K(o.events)), {
                    default: u(() => [
                      o.render ? (s(), d(F(o.render(l)), { key: 0 })) : o.content ? (s(), b(g, { key: 1 }, [
                        V(M(o.content), 1)
                      ], 64)) : N("", !0)
                    ]),
                    _: 2
                  }, 1040))), 128)) : N("", !0)
                ]),
                _: 2
              }, [
                r.component === "el-date-picker" ? {
                  name: "default",
                  fn: u(({ text: o }) => [
                    w("div", re, [
                      w("span", ne, M(o), 1)
                    ])
                  ]),
                  key: "0"
                } : void 0
              ]), 1040, ["modelValue", "onUpdate:modelValue", "onKeydown"]))
            ]),
            _: 2
          }, 1032, ["prop", "label", "style"]))), 128)),
          w("div", oe, [
            O(a, {
              type: "primary",
              onClick: t[0] || (t[0] = (r) => y(!0))
            }, {
              default: u(() => [
                V("\u67E5\u8BE2")
              ]),
              _: 1
            }),
            O(a, {
              type: "info",
              onClick: t[1] || (t[1] = (r) => S(!0))
            }, {
              default: u(() => [
                V("\u91CD\u7F6E")
              ]),
              _: 1
            })
          ])
        ]),
        _: 3
      }, 16, ["model"]);
    };
  }
});
export {
  de as default
};
