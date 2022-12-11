<template>
  <div>
    <div class="animation">
      <h3 class="text">Анимации</h3>
      <ul class="animation-list">
        <li
          v-for="item in getListItems"
          :key="item.id"
          draggable="true"
          @dragstart="handleDragStart($event)"
          :id="item.id"
        >
          <div class="animation-icon">
            <ImageComponent :id="item.icon" />
          </div>
          <div class="description">
            <p class="category-name">{{ getCategoryName(item.category_id) }}</p>
            <p class="animation-name">{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </div>
    <h3 class="text">Быстрый доступ</h3>
    <p class="description">
      Для добавления анимации в быстрый доступ - зажмите ЛКМ и перетащите
      анимацию в нужную ячейку
    </p>
    <div class="quick-access">
      <ul>
        <li
          v-for="(id, index) in this.mainStore.quickAccessList"
          :key="index"
          :class="{ empty: !id }"
          @drop="handleDrop($event, index)"
          @dragover="handleDragOver($event)"
        >
          <div v-if="id">
            <div class="animation-icon">
              <button @click="deleteQuickltem(index)" class="delete-button">
                <img src="../assets/images/close.svg" alt="close" />
              </button>
              <ImageComponent :id="getAnimationIcon(id)" />
            </div>
            <div class="description">
              <p class="category-name">{{ getAnimationCategoryName(id) }}</p>
              <p class="animation-name">{{ getAnimationName(id) }}</p>
            </div>
          </div>
          <span class="sequence-number">{{ index + 1 }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";
import ImageComponent from "./ImageComponent.vue";

export default {
  name: "AnimationComponent",
  components: { ImageComponent },
  setup() {
    const mainStore = useMainStore();

    return {
      mainStore,
    };
  },
  computed: {
    getListItems() {
      if (this.mainStore.searchValue) {
        return this.mainStore.searchedAnimations;
      }
      return this.mainStore.currentCategoryAnimations;
    },
  },
  methods: {
    getCategoryName(id) {
      const category = this.mainStore.categories.find((item) => item.id === id);

      return category.name;
    },
    getAnimationName(id) {
      const animation = this.mainStore.animations.find(
        (item) => item.id === id
      );

      return animation.name;
    },
    getAnimationCategoryName(id) {
      const animation = this.mainStore.animations.find(
        (item) => item.id === id
      );

      return this.getCategoryName(animation.category_id);
    },
    getAnimationIcon(id) {
      const animation = this.mainStore.animations.find(
        (item) => item.id === id
      );

      return animation.icon;
    },
    deleteQuickltem(index) {
      this.mainStore.deleteQuickltem(index);
    },
    handleDrop(event, index) {
      event.preventDefault();
      const id = event.dataTransfer.getData("text");
      this.mainStore.addQuickltem(index, id);
    },
    handleDragOver(event) {
      event.preventDefault();
    },
    handleDragStart(event) {
      event.dataTransfer.effectAllowed = "copy";
      event.dataTransfer.setData("text", event.target.id);
    },
  },
};
</script>

<style scoped>
.animation {
  margin-bottom: 19px;
}
.animation-list {
  height: 442px;
  overflow-y: scroll;
}
.text {
  margin-bottom: 15px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.animation-icon {
  margin-bottom: 5px;
  background-color: rgba(19, 26, 27, 0.7);
  display: flex;
  width: 76px;
  height: 76px;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  position: relative;
}

.animation-icon:hover {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(43, 217, 217, 0.25) 0%,
    rgba(43, 217, 217, 0) 100%
  );
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to left top, #2bd9d925, #2bd9d9, #2bd9d925);
  border-image-slice: 1;
}
.animation-icon svg:hover {
  fill: #2bd9d9;
  opacity: 1;
}

.description {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
}

.category-name {
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-transform: capitalize;
  color: #e5ffff;
}

.animation-name {
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  text-transform: capitalize;
  color: rgba(229, 255, 255, 0.4);
}
.delete-button {
  border: none;
  background: transparent;
  position: absolute;
  top: 0px;
  right: 5px;
}
.sequence-number {
  font-style: italic;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: rgba(229, 255, 255, 0.15);
  right: 5px;
  top: 53px;
  position: absolute;
}
.empty {
  margin-bottom: 5px;
  background-color: rgba(19, 26, 27, 0.7);
  display: flex;
  width: 76px;
  height: 76px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to left top, #2bd9d925, #2bd9d9, #2bd9d925);
  border-image-slice: 1;
  margin-bottom: 37px;
}
</style>
