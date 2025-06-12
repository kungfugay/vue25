<template>
  <p>{{ text }}</p>
</template>
<script>
export default {
  data() {
    return {
      text: "...",
    };
  },
  beforeCreate() {
    this.text = "initial text";
    console.log("beforeCreate: The Component is not created yet");
  },
  created() {
    this.text = "created() text";
    console.log("created: The component just got created.");
  },
  mounted() {
    console.log("mounted: The component is mounted!");
  },
};
</script>
