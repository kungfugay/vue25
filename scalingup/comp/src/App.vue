<template>
  <slot-comp v-for="x in foods">
    <h4>{{ x.name }}</h4>
    <p>{{ x.desc }}</p>
  </slot-comp>
  <footer>
    <slot-comp>
      <h3>Footer</h3>
    </slot-comp>
  </footer>
  <slot-comp></slot-comp>
</template>

<script>
export default {
  data() {
    return {
      foods: [
        { name: "pizza", desc: "good" },
        { name: "coke", desc: "bad" },
      ],
    };
  },
};
</script>

<style scoped>
footer > div {
  background-color: lightpink;
}
</style>
