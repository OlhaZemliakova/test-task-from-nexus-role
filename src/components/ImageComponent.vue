<template>
  <svg class="icon">
    <use :xlink:href="'src/assets/images/sprite.svg#' + id"></use>
  </svg>
</template>

<script>
export default {
  name: "ImageComponent",
  props: ["id"],
};
</script>

<style scoped>
.icon {
  height: 36px;
  fill: #e5ffff;
  opacity: 0.25;
}
</style>
