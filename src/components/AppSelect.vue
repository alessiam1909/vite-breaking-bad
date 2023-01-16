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
    <div class="select-container">
        <select  id="select" v-model="change" @change="$emit('selection', change)">
            <option value="" disabled selected> Scegli categoria </option>
            <option v-for="(item, index) in option" :key="index" :value="item.archetype_name">{{item.archetype_name}}</option>
        </select>
        
    </div>
</template>

<style lang="scss">

.select-container{
   
    margin: 40px 0;

    select{
        width: 300px;
        height: 50px;
        background-color: white;
        border: none;
        border-radius: 10px;
        padding: 10px;
        font-size: 15px;
        font-weight: 600;
        color: rgba(0,0,0, 0.75);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

}
    
</style>