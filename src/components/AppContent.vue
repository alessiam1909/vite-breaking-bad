<script>

import {store} from '../store.js'
import AppCard from './AppCard.vue'
export default {
    components: {
        AppCard,
    },
    data(){
        return{
            store,
        }
    },
   
}
</script>

<template lang="">
    <div>
        <AppCard v-for="(item, index) in store.cardList" :key="index" :card="item"/>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/partials/_variables.scss' as *; 
    @use '../assets/styles/partials/_mixins.scss' as *; 
</style>