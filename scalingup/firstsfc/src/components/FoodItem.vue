<template>
  <div v-on:click="countClicks">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
    <p id="red">You have clicked me {{ clicks }} times.</p>
  </div>
</template>

<script>
export default {
  name: "FoodItem", // 파일 이름을 컴포넌트 이름으로 자동 삽입
  components: {},
  data() {
    return {
      name: "Apples",
      message: "I like apples",
      clicks: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    countClicks() {
      this.clicks++;
    },
  },
};
</script>

<style scoped>
#red {
  font-weight: bold;
  color: rgb(144, 12, 12);
}
</style>
