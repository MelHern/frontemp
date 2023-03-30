import { defineStore } from 'pinia'
import { ref,computed } from 'vue'

/*
ref()s become state properties
computed()s become getters
function()s become actions*/
export const principal = defineStore('principal', () => {
    const token = ref("aaaff")
 
   // const doubleCount = computed(() => count.value * 2)
    function guardatoken(toke:string) {
        token.value=toke;
    }
  
    return { token, guardatoken }
  })