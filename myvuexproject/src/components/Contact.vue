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
    <br>

<input
      name="name"
      v-model="name"
      placeholder="Type name..."
      required
    /><input
      name="email"
      v-model="email"
      placeholder="Type email id..."
      required
    /><textarea name="message"
      v-model="message"
      placeholder="Type message..."
        required>
    </textarea>
    <button @click="submitMessage()">Send</button>
    <br>
    <br>

    <!-- {{ContactInfo}} -->
    <li v-for='CI in ContactInfo' :key='CI.ID'> Email: <span> {{ CI.email }} </span> &nbsp; Name: <span> {{ CI.name }} </span> &nbsp; Message: <span> {{ CI.message }} </span> </li>
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
            name: '',
            email: '',
            message: ''
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
    submitMessage(){
    //   event.preventDefault();
       //console.log(this.qty)
       let payload = {
      name: this.name,
      email: this.email,
      message: this.message,
      action: 'insert'
      /* more parameters */
    }
    //this.$store.dispatch('login', payload)
    console.log(payload)
    this.$store.commit("sendMessage", payload);
    },
    // removeCart() {
    //   localStorage.removeItem('cart');
    //   //this.saveCats();
    // },
  }
}
</script>