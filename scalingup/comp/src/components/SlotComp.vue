<template>
  <!-- slot 태그 위에 div를 넣으면 card처럼 쓸 수 있음 -->
  <div>
    <slot>
      <h4>기본으로 제공되는 fallback 컨텐츠</h4>
    </slot>
  </div>
</template>

<style scoped>
div {
  background-color: lightgreen;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  flex-basis: 150px;
  border-radius: 10px;
  border: solid black 2px;
  margin: 10px;
  padding: 20px 10px 0 10px;
}
div:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
