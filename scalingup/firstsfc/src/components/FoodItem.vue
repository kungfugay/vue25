<template>
  <div>
    <h2>
      {{ foodName }}
      <img src="/img_quality.svg" v-show="isFavorite" />
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
  </div>
</template>

<script>
export default {
  props: ["foodName", "foodDesc", "isFavorite"],
  emits: ["toggle-favorite"], // Vue 인스턴스에 option으로 문서화 할 수 있음
  methods: {
    toggleFavorite() {
      // this.foodIsFavorite = !this.foodIsFavorite;
      this.$emit("toggle-Favorite", this.foodName); // 커스텀 이벤트
    },
  },
};
</script>

<style>
img {
  height: 1.5em;
  float: right;
}
</style>
