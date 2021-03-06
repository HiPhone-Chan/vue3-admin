import { defineStore } from 'pinia';

export const useErrorLogStore = defineStore('errorLog', {
  state: () => ({
    logs: []
  }),
  actions: {
    addErrorLog(log) {
      this.logs.push(log)
    },
    clearErrorLog({ commit }) {
      this.logs.splice(0)
    }
  }
});
