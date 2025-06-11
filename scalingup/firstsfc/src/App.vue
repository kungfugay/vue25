<template>
  <h1>Food</h1>
  <div id="wrapper">
    <!-- 컴포넌트를 v-for로 사용 -->
    <food-item
      v-for="x in foods"
      :food-name="x.name"
      :food-desc="x.desc"
      :is-favorite="x.favorite"
      @toggle-favorite="receiveEmit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: [
        {
          name: "Apples",
          desc: "Apples are a type of fruit that grow on trees.",
          favorite: true,
        },
        {
          name: "Pizza",
          desc: "Pizza has a bread base with tomato sauce, cheese, and toppings on top.",
          favorite: false,
        },
        {
          name: "Rice",
          desc: "Rice is a type of grain that people like to eat.",
          favorite: false,
        },
        {
          name: "Fish",
          desc: "Fish is an animal that lives in water.",
          favorite: true,
        },
        {
          name: "Cake",
          desc: "Cake is something sweet that tastes good.",
          favorite: false,
        },
      ],
    };
  },
  methods: {
    // food-item에 등록된 toggle-favorite 이벤트가 호출되면 foodName을 foodId라는 이름의 인수로
    // receiveEmit으로 전달한다.
    // 만약 가져온 foodId가 배열 food의 food.name과 같다면 favorite을 switch 한다.
    receiveEmit(foodId) {
      const foundFood = this.foods.find((food) => food.name === foodId);
      foundFood.favorite = !foundFood.favorite;
    },
  },
};
</script>

<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
#wrapper > div {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>
