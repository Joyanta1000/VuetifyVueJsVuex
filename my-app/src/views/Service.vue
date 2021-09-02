<template>
  <v-container fluid>

<v-app-bar style="background-color: Green;" app>
<v-list-item to="/"
                link >
        <v-list-item-content >
          
          <v-list-item-title style="color:white;" class="text-h6">
             My Application
          </v-list-item-title>
          <v-list-item-subtitle style="color:white;">
            Welcome to my application
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
          <v-spacer></v-spacer>

          <v-menu
            bottom
            left
            class="blue white--text"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon style="color: white;">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items_lists"
                :key="i"
                :to="item.path"
                link
              >
              <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

  </v-app-bar>

    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1 class="h1_tag">SERVICES</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>

<!-- <v-row >
        <v-col
          v-for="n in 4"
          :key="n"
          cols="12"
          sm="4"
        >
          <v-card
            class="pa-2"
            
            
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row> -->




    <div class="d-flex justify-space-between mb-3">
        <div class="pa-1" v-for="detail in details" :key="detail.id">
            <v-img
            contain
            v-bind:lazy-src="require('../assets/' + detail.image)"
  max-height = "300"
  max-width = "450"
  v-bind:src = "require('../assets/' + detail.image)"
></v-img>
          <h3 class="h3_tag">{{ detail.title }}</h3>
          <p class="p_tag">
            {{ detail.description }}
          </p>
          <br>
           <v-row
    align="center"
    justify="space-around"
  >
    <v-btn
      tile
      color="success"
    >
      <v-icon left>
        visibility
      </v-icon>
      View
    </v-btn>
  </v-row>

        </div>
        <!-- <div class="pa-2">
            <v-img
            contain
  lazy-src="../assets/Service-svg_Mobile.svg"
  max-height="300"
  max-width="450"
  src="../assets/Service-svg_Mobile.svg"
  
></v-img>
          <h3 class="h3_tag">Mobile</h3>
          <p class="p_tag">
            We provide custom mobile application development (iOS, Android and Cross Platform) by our expert mobile app developers. From design to development and ongoing support. Custom built from scratch or code-takeover projects. We are passionate about delivering innovative solutions to fit your needs.
          </p>
          <br>
          <v-row
    align="center"
    justify="space-around"
  >
    <v-btn
      tile
      color="success"
    >
      <v-icon left>
        visibility
      </v-icon>
      View
    </v-btn>
  </v-row>
        </div> -->
        <!-- <div class="pa-3">
            <v-img
            contain
  lazy-src="../assets/Service-svg_Graphics.svg"
  max-height="300"
  max-width="450"
  src="../assets/Service-svg_Graphics.svg"
  
></v-img>
          <h3 class="h3_tag">Graphics</h3>
          <p class="p_tag">
            We are a full-service interactive graphic design firm offering creative solutions for logo design, web design, print design and more! We work closely with our clients, and provide fresh ideas, thinking outside parameters to deliver excellent results — always on time and within budget.
          </p>
          <br>
          <v-row
    align="center"
    justify="space-around"
  >
    <v-btn
      tile
      color="success"
    >
      <v-icon left>
        visibility
      </v-icon>
      View
    </v-btn>
  </v-row>
        </div> -->

    </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'

export default {
  name: 'Service',
  data () {
    return {
      details:[],
      //path:'../assets/',
      detail: null,
      items_lists: [
          { title: 'SignIn', path: '/signin', icon: 'mdi-account-key' },
          { title: 'About', path: '/about', icon: 'view_agenda' },
          { title: 'Contact', path: '/contact', icon: 'contacts' },
          { title: 'Service', path: '/service', icon: 'miscellaneous_services' },
        ],
    }
  },
  mounted(){
            axios
      .get('http://127.0.0.1/MyProject/MyTest/showServiceDetails.php')
      .then(({data})=>{
                    this.details = data[0]
                    console.log(this.details)
                    
                }).catch(({ data })=>{
                    console.error(data)
                })
        },
};
</script>

<style scoped>
.h1_tag{
  font-size: 50px;
  font-family: bold;
  font-family: 'Times New Roman', Times, serif;
}
.p_tag{
  text-align: center;
  max-width: 460px;
}
.h3_tag{
    text-align: center;
}
.v_btn{
    flex: 1;
    align-self: center;
}

</style>