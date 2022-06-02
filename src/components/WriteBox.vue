<template>
  <div
    class="upload-image"
    :style="{ backgroundImage: `url(${currentImageUrl})` }"
  ></div>
  <div class="write">
    <textarea
      @input="$emit('deliveryContent', $event.target.value)"
      class="write-box"
      v-model="content"
    >
write!</textarea
    >
  </div>
</template>

<script>
export default {
  props: {
    currentImageUrl: String,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    deliveryContent() {
      this.$emit("deliveryContent", this.content);
    },
  },
};
</script>

<style>
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
