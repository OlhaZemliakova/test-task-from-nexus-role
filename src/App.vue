<template>
  <main>
    <options-component />
  </main>
</template>

<script>
import OptionsComponent from "./components/OptionsComponent.vue";
import { useMainStore } from "@/stores/MainStore";

export default {
  components: {
    OptionsComponent,
  },
  setup() {
    const mainStore = useMainStore();

    mainStore.restoreFromStorage();
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
