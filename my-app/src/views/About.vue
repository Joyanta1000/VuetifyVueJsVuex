<template>
  <v-container fluid>
    

<v-app-bar style="background-color: Green;" app>
<v-list-item to="/"
                link >
        <v-list-item-content>
          
          <v-list-item-title style="color: white;" class="text-h6">
             My Application
          </v-list-item-title>
          <v-list-item-subtitle style="color: white;">
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


    <v-layout row wrap v-if="details">
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1 class="h1_tag">OVER 10 YEARS</h1>
<h1 class="h1_tag">IN THE GAME</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
    <div class="d-flex justify-space-between mb-6">
        <div class="pa-1" v-for="detail in details" :key="detail.ID">
          <h3>{{ detail.title }}</h3>
          <p class="p_tag">
            {{ detail.description }}
          </p>
        </div>
    </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'About',
  data () {
    return {
      details:[],
      items_lists: [
          { title: 'SignIn', path: '/signin', icon: 'mdi-account-key' },
          { title: 'About', path: '/about', icon: 'view_agenda' },
          { title: 'Contact', path: '/contact', icon: 'contacts' },
          { title: 'Service', path: '/service', icon: 'miscellaneous_services' },
        ],
        detail: null,
        title: "",
        description: "",
    }
  },
  mounted(){
            axios
      .get('http://127.0.0.1/MyProject/MyTest/showAboutDetails.php')
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
  text-align:justify;
  max-width: 460px;
}

</style>