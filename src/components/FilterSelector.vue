<template>
  <!-- 필터선택페이지 -->
  <div
    :class="`${curFilter} upload-image`"
    :style="{ backgroundImage: `url(${currentImageUrl})` }"
  />
  <div class="filters">
    <filter-box
      v-for="(filter, i) in filters"
      :key="i"
      :currentImageUrl="currentImageUrl"
      :filter="filter"
      @changeFilter="$emit('changeFilter', $event)"
      >{{ filter }}</filter-box
    >
  </div>
</template>

<script>
import FilterBox from "@/components/FilterBox";
export default {
  props: {
    currentImageUrl: String,
    filters: Array,
    curFilter: String,
  },
  components: {
    FilterBox,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
</style>
