
<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppLoader from './components/AppLoader.vue';
import { store } from './store.js';

export default{
  components: {
    AppHeader,
    AppContent,
    AppLoader
  },
  data(){
    return{
      store
    }
  },
  created(){
    this.getElementApi();
  },
  methods: {
    getElementApi(){
      axios.get(store.url).then((response =>{
        store.cardList = response.data.data;
        setTimeout(() => {
          store.loaded = true
        }, 2000);
      }))
    }
  }
}
</script>

<template>
  <div v-if="store.loaded">
    <AppHeader/>
    <AppContent/>
  </div>
  <div v-else>
    <AppLoader/>
  </div>
</template>

<style lang="scss">
  @use './assets/styles/generals.scss' as *; 
</style>
