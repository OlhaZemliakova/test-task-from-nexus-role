<template>
  <main>
    <options-component />
  </main>
</template>

<script>
import OptionsComponent from "./components/OptionsComponent.vue";

export default {
  components: {
    OptionsComponent,
  },
};
</script>

<style>
main {
  background-image: url("assets/images/gta-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
