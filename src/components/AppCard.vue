<script>


export default {
    props:{
        card: Object,
    }
   
}
</script>

<template lang="">
    <div class="card">
        <img :src="card.image_url" :alt="card.name">
        <h4>{{card.name}}</h4>
        <div>{{card.archetype}}</div>
    </div>
</template>

<style lang="scss">
    @use './assets/styles/partials/_variables.scss' as *; 
    @use './assets/styles/partials/_mixins.scss' as *; 
</style>