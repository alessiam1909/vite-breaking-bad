<script>
export default {
    
}
</script>

<template lang="">
    <header>
        <div class="container">
            <img class="logo" src="../assets/ygoprodeck_header_logo.png" alt="ygoprodeck.com Logo">
        
            <div class="titolo">
                <h2>Yu-Gi-Oh API</h2>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    @use '../assets/styles/partials/variables' as *;
    header{
        background-color: white;

        .container{
            display: flex;
            width: 90%;
            margin: 0 auto;
            padding: 30px 0;

            .logo{
                margin: 0 30px;
            }

           
        }
    }
</style>