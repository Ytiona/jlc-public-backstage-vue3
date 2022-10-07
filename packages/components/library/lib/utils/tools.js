const t = (...e) => e.reduce(
  (o, r) => (...c) => o(r(...c))
);
export {
  t as compose
};
