import { defineStore } from "pinia";
import { animations } from "@/data/animations";
import { categories } from "@/data/categories";

export const useMainStore = defineStore("MainStore", {
  state: () => ({
    animations,
    categories,
    selectedCategoryId: categories[0].id,
    searchValue: "",
    quickAccessList: ["twenty-one", "sixteen", "seventeen", null, null, null],
  }),
  actions: {
    selectCategory(id) {
      this.selectedCategoryId = id;
      console.log(id);
    },
    search(text) {
      this.searchValue = text;
    },
    addQuickltem(index, id) {
      this.quickAccessList[index] = id;
    },
    deleteQuickltem(index) {
      this.quickAccessList[index] = null;
    },
  },
  getters: {
    currentCategoryAnimations() {
      return this.animations.filter(
        (item) => item.category_id === this.selectedCategoryId
      );
    },
    searchedAnimations() {
      if (this.searchValue.length < 2) return;

      return this.animations.filter((item) =>
        item.name.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },
});
