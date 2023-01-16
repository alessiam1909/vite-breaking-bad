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

        <div class="carteTrovate"> Ci sono  {{store.cardList.length}} carte disponibili</div>
        <div class="row">
                <AppCard class="col" v-for="(item, index) in store.cardList" :key="index" :card="item"/>
        </div>
    </div>

</template>

<style lang="scss">
    @use '../assets/styles/partials/variables' as *;
    @use '../assets/styles/partials/mixins' as *;

    .container{
        width: 90%;
        margin: 0 auto;

        .carteTrovate{
            margin: 20px 0;
            color: rgba(0,0,0, 0.65);
        }
        .row{
            display: flex;
            
            margin: 50px 0;
            padding: 30px ;
            flex-wrap: wrap;
            background-color: white;
    
            .col{
                width: calc(100% / 5  - 20px);
            }
        }
    }
</style>