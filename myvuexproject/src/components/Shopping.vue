<template>
    <div>
        <div>
   <h1>{{ myAppName }}</h1>
</div>
    <input
      name="qty"
      v-model="qty"
      placeholder="Start typing..."
      required
    />
    <button @click="submitQty()">Add Quantity</button>
    <br>
    <!-- {{cart.length}} -->
    <br>

<h1>{{CartListName}}</h1>

     <li v-for="(crt,n) in cart" :key = "n"> <span> {{ crt }} </span></li>

<br>

<div>
    <h1>{{ContactListName}}</h1>
    <!-- {{ContactInfo}} -->
    <li v-for='CI in ContactInfo' :key='CI.ID'> Email: <span> {{ CI.email }} </span> &nbsp; Name: <span> {{ CI.message }} </span> &nbsp; Message: <span> {{ CI.message }} </span> </li>
    <!-- {{ ContactInfo }} -->
</div>

    <!-- <div><span><button @click="removeCart()">Remove</button></span> </div> -->
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
        myAppName(){
            console.log(this.$store.getters.getAppName);
            return this.$store.getters.getAppName;
        },
        CartListName(){
            console.log(this.$store.getters.getCartList);
            return this.$store.getters.getCartList;
        },
        ContactListName(){
            console.log(this.$store.getters.getContactList);
            return this.$store.getters.getContactList;
        },
        cart(){
            console.log(this.$store.getters.getCart);
            return this.$store.getters.getCart;
        },
        ContactInfo(){
            console.log(this.$store.getters.getContactInfo);
            return this.$store.getters.getContactInfo;
        }
    },
    mounted() {
    this.$store.dispatch("getContactInfo");
  },
    methods: {
    submitQty(){
    //   event.preventDefault();
       //console.log(this.qty)
    this.$store.commit("addToCart", this.qty);
    },
    // removeCart() {
    //   localStorage.removeItem('cart');
    //   //this.saveCats();
    // },
  }
}
</script>