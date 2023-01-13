
<script>
import axios from 'axios';
import AppContent from './components/AppContent.vue';
import AppCard from './components/AppCard.vue';
import { store } from './store.js';

export default{
  components: {
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
        store.cardList = response.data.results
      }))
    }
  }
}
</script>

<template>
 <AppContent/>
 <AppCard/>
</template>

<style lang="scss">
  @use './assets/styles/generals.scss' as *; 
</style>
