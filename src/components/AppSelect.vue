<script>


export default {
    props: {
        option: Object,
    },
    data(){
        return{
            change: ""
        }
    },
}
</script>

<template lang="">
    <div>
        <select name="" id="select" v-model="change" @change="$emit('selection', change)">
            <option value="Scegli categoria" >Scegli categoria</option>
            <option v-for="(item, index) in option" :key="index" :value="item.archetype_name">{{item.archetype_name}}</option>
        </select>
        
    </div>
</template>

<style lang="">
    
</style>