<template>
  <div>
    <div v-if="tab == 0">
      <Post v-for="(post, i) in posts" :key="i" :post="post" />
      <button @click="$emit('more')">더보기</button>
    </div>
    <filter-selector
      v-if="tab == 1"
      :currentImageUrl="currentImageUrl"
      :filters="filters"
      :curFilter="curFilter"
      @changeFilter="$emit('changeFilter', $event)"
    />
    <write-box
      v-if="tab == 2"
      :currentImageUrl="currentImageUrl"
      :curFilter="curFilter"
      @deliveryContent="$emit('deliveryContent', $event)"
    />
  </div>
</template>

<script>
import Post from "./Post.vue";
import WriteBox from "@/components/WriteBox.vue";
import FilterSelector from "@/components/FilterSelector";
export default {
  props: {
    posts: Array,
    tab: Number,
    currentImageUrl: String,
    curFilter: String,
  },
  components: {
    Post,
    WriteBox,
    FilterSelector,
  },
  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
