<template>
  <nav class="navigation">
    <ul>
      <li
        v-for="category in mainStore.categories"
        :key="category.id"
        :class="{ active: category.id === mainStore.selectedCategoryId }"
        @click="selectCategory(category.id)"
      >
        <div class="category-icon">
          <ImageComponent :id="category.icon" />
        </div>
        <p class="name">{{ category.name }}</p>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";
import ImageComponent from "./ImageComponent.vue";

export default {
  components: { ImageComponent },
  name: "CategoryComponent",
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    selectCategory(id) {
      this.mainStore.selectCategory(id);
    },
  },
};
</script>

<style scoped>
.navigation {
  margin: 45px 0;
}

li {
  width: 150px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  overflow: hidden;
}

li:last-child {
  margin-bottom: 0;
}

.category-icon {
  margin-bottom: 4px;
}
.category-icon svg {
  opacity: 0.25;
}

li.active .category-icon svg {
  opacity: 1;
}
.name {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: rgba(229, 255, 255, 0.4);
}
.active {
  background: linear-gradient(
    270.04deg,
    #293131 0.03%,
    rgba(229, 255, 255, 0) 99.97%
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
