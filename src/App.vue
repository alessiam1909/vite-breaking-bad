
<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppCard from './components/AppCard.vue';
import { store } from './store.js';

export default{
  components: {
    AppHeader,
    AppContent,
    AppCard
  },
  data(){
    return{
      store
    }
  },
  beforeMount(){
    this.getElementApi();
  },
  methods: {
    getElementApi(){
      axios.get(store.url).then((response =>{
        store.cardList = response.data.data
      }))
    }
  }
}
</script>

<template>
  <AppHeader/>
 <AppContent/>
 <AppCard/>
</template>

<style lang="scss">
  @use './assets/styles/generals.scss' as *; 
</style>
