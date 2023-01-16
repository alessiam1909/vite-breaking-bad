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
    <div class="container">
        <div class="row">
                <AppCard class="col" v-for="(item, index) in store.cardList" :key="index" :card="item"/>
        </div>
    </div>

</template>

<style lang="scss">
    @use '../assets/styles/partials/variables' as *;
    @use '../assets/styles/partials/mixins' as *;

    .row{
        display: flex;
        width: 90%;
        margin: 50px auto;
        padding: 30px ;
        flex-wrap: wrap;
        background-color: white;

        .col{
            width: calc(100% / 5  - 20px);
        }
    }
</style>