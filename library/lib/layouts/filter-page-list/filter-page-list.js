import { openBlock as o, createElementBlock as r, createElementVNode as t, renderSlot as s } from "vue";
import "./filter-page-list.vue?vue&type=style&index=0&scoped=1ae8d505&lang.css";
import i from "../../_virtual/_plugin-vue_export-helper.js";
const d = {}, l = { class: "ftp-wrap" }, n = {
  class: "filter-wrap",
  ref: "filterWrap"
}, a = { class: "filter-bottom" }, c = {
  class: "list-wrap",
  ref: "listWrap"
}, f = { class: "list-bottom" }, p = {
  class: "page-wrap",
  ref: "pageWrap"
};
function _(e, u) {
  return o(), r("div", l, [
    t("div", n, [
      s(e.$slots, "filter", {}, void 0, !0)
    ], 512),
    t("div", a, [
      s(e.$slots, "filter-bottom", {}, void 0, !0)
    ]),
    t("div", c, [
      s(e.$slots, "list", {}, void 0, !0)
    ], 512),
    t("div", f, [
      s(e.$slots, "list-bottom", {}, void 0, !0)
    ]),
    t("div", p, [
      s(e.$slots, "page", {}, void 0, !0)
    ], 512)
  ]);
}
const $ = /* @__PURE__ */ i(d, [["render", _], ["__scopeId", "data-v-1ae8d505"]]);
export {
  $ as default
};
