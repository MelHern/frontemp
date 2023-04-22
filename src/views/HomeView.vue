<template>
  <div >
    <div v-show="store.bienvenida" style="margin:auto">Bienvendio a...{{ store.bienvenida }}</div>
  </div>
</template>

<script lang="ts" setup>
import {principal} from '../store/principal';
import { onMounted, onBeforeMount } from 'vue'
const store = principal()
store.guardatoken("lalalalalalalal")

onMounted(() =>{
  store.setBienvenida(true);
})

console.log(store.bienvenida);
</script>
