<template>
  <button @:click="fetchData">데이터 가져오기</button>
    <ul v-if="data">
      <li v-for="(user, index) in data.data" :key="index">
        <div v-for="key in Object.keys(user)" :key="key">
          {{ key }}: {{ user[key] }}
        </div>
      </li>
    </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      this.data = await axios.get("https://jsonplaceholder.typicode.com/users");
    },
  },
};
</script>
