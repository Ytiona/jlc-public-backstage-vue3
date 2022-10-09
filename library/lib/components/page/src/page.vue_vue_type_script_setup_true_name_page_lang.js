import { defineComponent as c, useAttrs as m, reactive as _, resolveComponent as l, openBlock as z, createBlock as f, mergeProps as S } from "vue";
import { DEFAULT_PAGE_SIZE as E } from "../../../constants/index.js";
const U = /* @__PURE__ */ c({
  __name: "page",
  emits: ["query"],
  setup(N, { expose: o, emit: g }) {
    const p = m(), t = {
      pageNum: p.defaultCurrentPage || 1,
      pageSize: p.defaultPageSize || E
    }, a = _({ ...t }), s = (e) => {
      a.pageNum = e, n();
    }, u = (e) => {
      a.pageSize = e, n();
    }, n = (e = !0) => {
      g(
        "query",
        {
          pageNum: a.pageNum,
          pageSize: a.pageSize
        },
        e
      );
    };
    return o({
      reset: (e = !0, r = !1) => {
        a.pageNum = t.pageNum, r && (a.pageSize = t.pageSize), n(e);
      }
    }), (e, r) => {
      const i = l("el-pagination");
      return z(), f(i, S(e.$attrs, {
        "current-page": a.pageNum,
        "page-size": a.pageSize,
        "onUpdate:currentPage": s,
        "onUpdate:pageSize": u,
        background: "",
        layout: "total, sizes, prev, pager, next, jumper"
      }), null, 16, ["current-page", "page-size"]);
    };
  }
});
export {
  U as default
};
