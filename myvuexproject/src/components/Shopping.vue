<template>
    <div>
    <input
      name="qty"
      v-model="qty"
      placeholder="Start typing..."
      required
    />
    <button @click="submitQty()">Add Quantity</button>
    <br>
    <br>
    <li v-for="i in 5" :key = "i"> {{ cart[i] }} </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            qty: '',
        };
    },
    computed: {

        cart(){
            return this.$store.getters.getCart;
        }
    },
    methods: {
    submitQty(){
    //   event.preventDefault();
       console.log(this.qty)
    this.$store.commit("addToCart", this.qty);
    }
  }
}
</script>