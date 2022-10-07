import { openBlock as e, createElementBlock as r, createElementVNode as s, renderSlot as o } from "vue";
/* empty css                                                  */import i from "../_virtual/_plugin-vue_export-helper.js";
const l = {}, a = { class: "ftp-wrap" }, c = {
  class: "filter-wrap",
  ref: "filterWrap"
}, n = { class: "filter-bottom" }, d = {
  class: "list-wrap",
  ref: "listWrap"
}, p = { class: "list-bottom" }, f = {
  class: "page-wrap",
  ref: "pageWrap"
};
function _(t, m) {
  return e(), r("div", a, [
    s("div", c, [
      o(t.$slots, "filter")
    ], 512),
    s("div", n, [
      o(t.$slots, "filter-bottom")
    ]),
    s("div", d, [
      o(t.$slots, "list")
    ], 512),
    s("div", p, [
      o(t.$slots, "list-bottom")
    ]),
    s("div", f, [
      o(t.$slots, "page")
    ], 512)
  ]);
}
const b = /* @__PURE__ */ i(l, [["render", _]]);
export {
  b as default
};
