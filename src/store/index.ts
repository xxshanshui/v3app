import { defineStore } from 'pinia'
import { Names } from "./stors_name";


export const useInfoStore = defineStore(Names.TEST, {
  state: () => {
    return {
      name: '我是𝒆𝒅.',
      age: 10
    }
  },
  getters: {
    newName():string{
      return `这hi是geters修饰过的名称 ${this.name}`
    }
  },

  actions: {
   
  }
})


