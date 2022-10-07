<template>
  <div class="ftp-wrap">
    <div class="filter-wrap" ref="filterWrap">
      <slot name="filter"></slot>
    </div>
    <div class="filter-bottom">
      <slot name="filter-bottom"></slot>
    </div>
    <div class="list-wrap" ref="listWrap">
      <slot name="list"></slot>
    </div>
    <div class="list-bottom">
      <slot name="list-bottom"></slot>
    </div>
    <div class="page-wrap" ref="pageWrap">
      <slot name="page"></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="jlc-layout"></script>

<style lang="scss">
  .list-wrap {
    margin-bottom: 10px;
  }

  .page-wrap {
    display: flex;
    justify-content: center;
  }
</style>
