const o = ["filter-bottom", "list-bottom"], s = (t) => t.filter((u) => {
  if (u.slot) {
    if (o.includes(u.slot))
      throw new Error(`${u.slot}\u4E3A\u7EC4\u4EF6\u5185\u90E8\u9884\u7559\u63D2\u69FD\uFF0C\u8BF7\u4FEE\u6539\u63D2\u69FD\u540D\u79F0`);
    return !0;
  }
}).map((u) => u.slot);
export {
  o as RESERVE_SLOTS,
  s as getOptionSlots
};
