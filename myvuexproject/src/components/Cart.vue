<template>
    <div>
        <h1>{{ myAppName }}</h1>

        

    </div>
</template>

<script>
export default {
    data(){
        return {
            total: 0
        }
    },

    // mounted: {
    //     live(){
    //     console.log(localStorage.cart)
    //     }
    // },

    computed: {
        myAppName(){
            return this.$store.getters.getAppName;
        },

        cart(){
            return this.$store.getters.getCart;
        }

    }
}
</script>