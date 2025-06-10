<template>
  <h1>Food</h1>
  <food-item></food-item>
  <food-item></food-item>
  <food-item></food-item>
</template>

<script></script>

<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
/* 
구성 요소를 개별적으로 작동시킬 수 있다
고유의 한 id로 요소를 표시하지 않아도 각 구성 요소를 개별적으로 처리 가능
*/
#app > div:hover {
  cursor: pointer;
}
</style>
