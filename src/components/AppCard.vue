<script>


export default {
    props:{
        card: Object,
    }
   
}
</script>

<template lang="">
    <div class="card">
        <img :src="card.card_images[0].image_url" :alt="card.name">
        <h4>{{card.name}}</h4>
        <div class="type">{{card.archetype}}</div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/partials/variables' as *; 
    @use '../assets/styles/partials/mixins' as *; 

    .card{
        background-color: $orange;
        margin: 20px 10px;
        padding-bottom: 20px;
        text-align: center;

        img{
            width: 100%;
        }

        h4{
            text-transform: uppercase;
            color: white;
            font-size: 15px;
            padding: 5px;
        }

        .type{
            font-size: 15px;
        }
    }
</style>

