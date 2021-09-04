<template>
    <div>
        <h1>{{ myAppName }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cart: [],
            total: 0
        }
    },

    computed: {
        myAppName(){
            return this.$store.getters.getAppName;
        }
    }
}
</script>