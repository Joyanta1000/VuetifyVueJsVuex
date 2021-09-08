import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        appName: "Simple E-Commerce",
        CartList: "Simple Cart List",
        ContactList: "Simple Contact List",
        cart: [],
        newCart: [],
        ContactInfo: [],
        sendMessage: []
    },
    getters: {
        getAppName: state => {
            return state.appName;
        },
        getCartList: state => {
            return state.CartList;
        },
        getContactList: state => {
            return state.ContactList;
        },
        getCart: state => {
            //localStorage.setItem('cart', JSON.stringify(state.cart))
            
            state.cart = JSON.parse(localStorage.getItem('cart'));
            return state.cart;


            //return state.cart;
        },

        getContactInfo: state => {
            
                // axios.get('http://127.0.0.1/MyProject/MyTest/showData.php')
                //     .then(response => {
                        
                //         state.ContactInfo = JSON.parse(JSON.stringify(response.data[0]));
                //         console.log(state.ContactInfo)
                //         return state.ContactInfo;
                // })

                return state.ContactInfo;
            

        },

        insertMessage: state => {
            return state.sendMessage[0];
        }

    },
    mutations: {
      addToCart(state, payload) {
          //console.log(state)
          
          //localStorage.cart = payload;
          //state.newCart = payload;
          //console.log(state.newCart);
          
          //state.cart = JSON.parse(localStorage.getItem('cart'));
        //state.cart = JSON.parse(state.cart);
        //console.log(payload)
        //console.log(state.cart)
           state.cart.push(payload);
           //console.log(state.cart)
        let parsed = JSON.stringify(state.cart);
        localStorage.setItem('cart', parsed);
        // state.cart = JSON.parse(localStorage.getItem('cart'));
        // console.log(state.cart)
          //state.newCart = '';
          
          //this.saveCart(state);
          
      },
      SET_CONTACT_INFO(state, ContactInfo) {

        state.ContactInfo = ContactInfo
    },
     sendMessage(state, payload) {
        
    //      state.cart.push(payload);
       
    //   let parsed = JSON.stringify(state.cart);
    //   localStorage.setItem('cart', parsed);

    console.log(payload)

    state.sendMessage.push(payload);

    console.log("hi")

    console.log(state.sendMessage[0])

    // message insertion
    console.log("Hey")
    console.log(this.state.sendMessage[0]);

// axios({
//    method: 'post',
//    url: 'http://127.0.0.1/MyProject/MyTest/index.php',
//    data: this.state.sendMessage[0],
//    config: { headers: { 'Content-Type': 'application/json; charset=UTF-8' }}
// })
// .then(response => {
//    console.log(response)
//    //handle success
//    //console.log(response)
// })
// .catch(response => {
//    //handle error
//    console.log(response)
// });

let formData = new FormData();
        
        formData.append('name', this.state.sendMessage[0].name)
        formData.append('email', this.state.sendMessage[0].email)
        formData.append('message', this.state.sendMessage[0].message)
        formData.append('action', 'insert')


axios({
   method: 'post',
   url: 'http://127.0.0.1/MyProject/MyTest/index.php',
   data: formData,
   config: { headers: { 'Content-Type': 'application/json; charset=UTF-8' }}
})
.then(response => {
   console.log(response)
    
   //handle success
   //console.log(response)
})
.catch(response => {
   //handle error
   console.log(response)
});





// message insertion

      
    },
    //   saveCart(state){
    //     let parsed = JSON.stringify(state.cart);
    //     localStorage.setItem('cart', parsed);
    //   }
    },
    actions: {
      
        getContactInfo({ commit }) {
            axios.get('http://127.0.0.1/MyProject/MyTest/showData.php')
                .then(response => {
                    console.log(response.data[0]);
                    commit('SET_CONTACT_INFO', response.data[0])
            })
        },

        //insertMessage() {

             

        //}

    }
  })

  export default store;