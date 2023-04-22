import { defineStore } from 'pinia'
import { ref,computed } from 'vue'

/*
ref()s become state properties
computed()s become getters
function()s become actions*/
export const principal = defineStore('principal', () => {
    const token = ref("aaaff")

    const bienvenida =ref(false);
 
   // const doubleCount = computed(() => count.value * 2)
    function guardatoken(toke:string) {
        token.value=toke;
    }
    function setBienvenida(si:boolean) {
        bienvenida.value=si;
    }
  
    return { token,bienvenida, guardatoken,setBienvenida }
  })