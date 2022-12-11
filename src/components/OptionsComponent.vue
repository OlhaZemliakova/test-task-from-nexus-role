<template>
  <div class="container">
    <div class="category-list">
      <CategoryComponent />
    </div>
    <div class="hr"></div>
    <div class="animations-list">
      <SearchComponent />
      <AnimationComponent />
    </div>
  </div>
</template>

<script>
import CategoryComponent from "./CategoryComponent.vue";
import AnimationComponent from "./AnimationComponent.vue";
import SearchComponent from "./SearchComponent.vue";

export default {
  name: "OptionsComponent",
  components: {
    CategoryComponent,
    AnimationComponent,
    SearchComponent,
  },
};
</script>

<style scoped>
.container {
  background-image: url("../assets/images/bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  display: flex;
  justify-content: end;
}
.hr {
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(229, 255, 255, 0) 0%,
    #e5ffff 50%,
    rgba(229, 255, 255, 0) 100%
  );
  opacity: 0.1;
}
.animations-list {
  max-width: 313px;
  width: 100%;
  padding: 18px 15px;
  margin: 0 5px;
}
</style>
