<script>
import axios from 'axios'
import {store} from '../store.js'
import AppCard from './AppCard.vue'
import AppSelect from './AppSelect.vue'
export default {
    components: {
        AppSelect,
        AppCard,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        select_archetype(item){
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${item}`).then((response) =>{
                store.cardList = response.data.data;
                store.loaded = true
            })
        }
    }
   
}
</script>

<template lang="">
    <div class="container">
        <AppSelect :option="store.archetypeList" @selection="select_archetype"/>
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