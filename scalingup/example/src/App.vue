<template>
  <button @click="this.activeComp = !this.activeComp">
    Add/Remove Component
  </button>
  <div>
    <comp-one v-if="activeComp"></comp-one>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComp: false,
    };
  },
};
</script>

<style scoped>
div {
  border-style: dotted;
  border-width: 2px;
  width: 150px;
  height: 200px;
}
</style>
