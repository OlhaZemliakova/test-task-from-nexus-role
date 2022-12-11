<template>
  <form>
    <input
      type="text"
      placeholder="Поиск по названию"
      @input="search($event.target.value)"
    />
  </form>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "SearchComponent",
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    search(value) {
      this.mainStore.search(value);
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  border: 1px solid rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  padding: 12px 32px 12px 9px;
  color: rgba(229, 255, 255, 0.29);
  margin-bottom: 11px;
  position: relative;
  background-image: url("../assets/images/clarity_search-line.svg");
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
}

input::placeholder {
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  width: 136px;
}
.search-icon {
  position: absolute;
}
</style>
