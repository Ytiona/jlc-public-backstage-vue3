import { ref as t, computed as R } from "vue";
import { DEFAULT_PAGE_SIZE as A } from "../constants/index.js";
const I = ({ props: s, emit: g, params: y }) => {
  const m = t(), n = t(), o = t(0), r = t([]), f = t(!1), c = t(!1), i = t({}), d = t({}), h = R(() => {
    const e = {
      pageNum: 1,
      pageSize: A,
      ...d.value
    }, a = {
      ...i.value,
      ...y.value
    };
    return s.page && Object.assign(a, e), a;
  }), p = (e, a) => {
    i.value = e || {}, a && l();
  }, F = (e, a) => {
    i.value = e || {}, n.value && n.value.reset(!1), a && l();
  }, Q = (e, a) => {
    d.value = e || {}, a && l();
  }, E = (e = !1) => {
    m.value.reset(!1), e && n.value.reset(!1), l();
  }, l = () => {
    if (!s.getData)
      return;
    const e = s.getData(h.value);
    e instanceof Promise ? (f.value = !0, P(e)) : v(e), g("get-data", e);
  };
  let u = 0;
  const P = (e) => {
    u++, e.then((a) => {
      v(a);
    }).catch(() => {
      u <= 1 && (r.value = [], c.value = !0, o.value = 0);
    }).finally(() => {
      u <= 1 && (f.value = !1), u--;
    });
  }, v = (e) => {
    r.value = e.list, o.value = e.total || 0, c.value = !1, g("got-data", e);
  };
  return s.initGet && l(), {
    filterRef: m,
    pageRef: n,
    total: o,
    data: r,
    loading: f,
    error: c,
    onFilterQuery: p,
    onFilterReset: F,
    onPageQuery: Q,
    refresh: E,
    query: l,
    handleQuery: P,
    handleQueryData: v
  };
};
export {
  I as default
};
