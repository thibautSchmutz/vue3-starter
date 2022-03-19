import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({ name: 'titi' }),
  actions: {
    setName(name: string) {
      this.name = name;
    },
  },
});
