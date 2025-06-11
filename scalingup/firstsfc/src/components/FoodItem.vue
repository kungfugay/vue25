<template>
  <div>
    <h2>
      {{ foodName }}
      <img src="/img_quality.svg" alt="" v-show="foodIsFavorite" />
    </h2>
    <p>{{ foodDesc }}</p>
    <button @:click="toggleFavorite">Favorite</button>
  </div>
</template>

<script>
export default {
  // props: ['foodName','foodDesc','isFavorite']
  // object로 받기 (타입 정의)
  props: {
    foodName: {
      type: String,
      required: true, // required 속성 추가
    },
    foodDesc: {
      type: String,
      required: false,
      default: "This is the default description.", // props의 기본값을 설정할 수 있습니다.
      validator: function (value) {
        // 유효성 검사기를 추가 가능하다. -> 경고를 console 창에서 확인 가능
        if (20 < value.length && value.length < 50) {
          return true;
        } else {
          return false;
        }
      },
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      foodIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleFavorite() {
      this.foodIsFavorite = !this.foodIsFavorite;
    },
  },
};
</script>

<style scoped>
img {
  height: 1.5em;
  float: right;
}
</style>
