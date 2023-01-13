<script>

import {store} from '../store.js'
export default {
    data(){
        return{
            store,
        }
    },
    created(){
        getElementApi(){
            axios.get(' https://db.ygoprodeck.com/api/v7/cardinfo.php').then((risultato =>{
                cardList = risultato.data.response
            }))
        }
    }
}
</script>

<template lang="">
    <div>
        
    </div>
</template>

<style lang="scss">
    @use './assets/styles/partials/_variables.scss' as *; 
    @use './assets/styles/partials/_mixins.scss' as *; 
</style>