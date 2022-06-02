<template>
  <div>
    <div v-if="tab == 0">
      <Post v-for="(post, i) in posts" :key="i" :post="post" />
      <button @click="$emit('more')">더보기</button>
    </div>
    <filter-selector v-if="tab == 1" :currentImageUrl="currentImageUrl" />
    <write-box
      v-if="tab == 2"
      :currentImageUrl="currentImageUrl"
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
  },
  components: {
    Post,
    WriteBox,
    FilterSelector,
  },
  methods: {},
};
</script>

<style></style>
