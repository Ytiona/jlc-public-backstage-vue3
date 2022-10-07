const o = (e) => ({
  clearSelection: e.clearSelection,
  getSelectionRows: e.getSelectionRows,
  toggleRowSelection: e.toggleRowSelection,
  toggleAllSelection: e.toggleAllSelection,
  toggleRowExpansion: e.toggleRowExpansion,
  setCurrentRow: e.setCurrentRow
}), n = (e) => ({
  select: e.onSelect,
  selectAll: e.onSelectAll,
  selectionChange: e.onSelectionChange,
  rowClick: e.onRowClick,
  rowDblclick: e.onRowDblclick,
  sortChange: e.onSortChange,
  currentChange: e.onCurrentChange
});
export {
  n as getEpTableCommonEvents,
  o as getEpTableCommonFns
};
