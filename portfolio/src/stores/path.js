import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const usePathStore = defineStore("counter", {
  state: () => ({
    previousPath: useStorage("previousPath", ""),
  }),
  getters: {
    getPrevious() {
      return this.previousPath;
    },
  },
  actions: {
    updatePath(path) {
      this.previousPath = path;
    },
  },
});
