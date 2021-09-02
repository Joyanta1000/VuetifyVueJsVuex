<template>
  <v-container fluid>


    <v-navigation-drawer app>
    <v-list-item to="/"
                link >
        <v-list-item-content>
          
          <v-list-item-title class="text-h6">
             My Application
          </v-list-item-title>
          <v-list-item-subtitle>
            Welcome to my application
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>

  <v-app-bar style="background-color: Green;" app>

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
                <v-icon style="color: black;">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items_list"
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
        <!-- <h1>Admin</h1> -->
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <!-- <p>This is a user's home page</p> -->
        <v-app id="inspire">
    <v-container class="lighten-5">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      
  
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <v-row>
        <v-col
          cols="6"
          md="4"
        >
          <v-card
            class="pa-2"
          >
             <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Revenue
        </div>
        <v-list-item-title class="text-h5 mb-1">
          $29000
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="90"
        
      > <v-img
        class="mx-2"
        src="./../assets/25684-9-banknotes-image.png"
        max-height="90"
        max-width="90"
        contain
      ></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        View
      </v-btn>
    </v-card-actions>

          </v-card>
          
        </v-col>
        <v-col
          cols="6"
          md="4"
        >
          <v-card
            class="pa-2"
          >
             <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Sales
        </div>
        <v-list-item-title class="text-h5 mb-1">
          3435
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="90"
        
      > <v-img
        class="mx-2"
        src="./../assets/cart_logo.png"
        max-height="90"
        max-width="90"
        contain
      ></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        View
      </v-btn>
    </v-card-actions>

          </v-card>
          
        </v-col>
        <v-col
          cols="6"
          md="4"
        >
          <v-card
            class="pa-2"
          >
             <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Clients
        </div>
        <v-list-item-title class="text-h5 mb-1">
          2986
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="90"
        
      > <v-img
        class="mx-2"
        src="./../assets/user-png-icon-26.jpg"
        max-height="90"
        max-width="90"
        contain
      ></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        View
      </v-btn>
    </v-card-actions>

          </v-card>
          
        </v-col>
      </v-row>
  
      <!-- Columns are always 50% wide, on mobile and desktop -->
<br>
   <br>   


<!-- Timeline -->

<v-timeline
        dense
        clipped
      >
        <v-timeline-item
          fill-dot
          class="white--text mb-12"
          color="orange"
          large
        >
          <template v-slot:icon>
            <span>JL</span>
          </template>
          <v-text-field
            v-model="input"
            hide-details
            flat
            label="Leave a comment..."
            solo
            @keydown.enter="comment"
          >
            <template v-slot:append>
              <v-btn
                class="mx-0"
                depressed
                @click="comment"
              >
                Post
              </v-btn>
            </template>
          </v-text-field>
        </v-timeline-item>
  
        <v-slide-x-transition
          group
        >
          <v-timeline-item
            v-for="event in timeline"
            :key="event.id"
            class="mb-4"
            color="pink"
            small
          >
            <v-row justify="space-between">
              <v-col
                cols="7"
                v-text="event.text"
              ></v-col>
              <v-col
                class="text-right"
                cols="5"
                v-text="event.time"
              ></v-col>
            </v-row>
          </v-timeline-item>
        </v-slide-x-transition>
  
        <v-timeline-item
          class="mb-6"
          hide-dot
        >
          <span>TODAY</span>
        </v-timeline-item>
  
        <v-timeline-item
          class="mb-4"
          color="grey"
          icon-color="grey lighten-2"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7">
              This order was archived.
            </v-col>
            <v-col
              class="text-right"
              cols="5"
            >
              15:26 EDT
            </v-col>
          </v-row>
        </v-timeline-item>
  
        <v-timeline-item
          class="mb-4"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7">
              <v-chip
                class="white--text ml-0"
                color="purple"
                label
                small
              >
                APP
              </v-chip>
              Digital Downloads fulfilled 1 item.
            </v-col>
            <v-col
              class="text-right"
              cols="5"
            >
              15:25 EDT
            </v-col>
          </v-row>
        </v-timeline-item>
  
        <v-timeline-item
          class="mb-4"
          color="grey"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7">
              Order confirmation email was sent to John Leider (john@vuetifyjs.com).
            </v-col>
            <v-col
              class="text-right"
              cols="5"
            >
              15:25 EDT
            </v-col>
          </v-row>
        </v-timeline-item>
  
        <v-timeline-item
          class="mb-4"
          hide-dot
        >
          <v-btn
            class="mx-0"
          >
            Resend Email
          </v-btn>
        </v-timeline-item>
  
        <v-timeline-item
          class="mb-4"
          color="grey"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7">
              A $15.00 USD payment was processed on PayPal Express Checkout
            </v-col>
            <v-col
              class="text-right"
              cols="5"
            >
              15:25 EDT
            </v-col>
          </v-row>
        </v-timeline-item>
  
        <v-timeline-item
          color="grey"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7">
              John Leider placed this order on Online Store (checkout #1937432132572).
            </v-col>
            <v-col
              class="text-right"
              cols="5"
            >
              15:25 EDT
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>

<!-- Timeline -->

<br>
<br>

<v-card>
      <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>


    </v-container>
  </v-app>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'

  export default {
    name: 'Home',
    data () {
      return {
        events: [],
    input: null,
    nonce: 0,
        search: '',
        items: [
          { title: 'Home', path: '/', icon: 'home' },
          { title: 'Dashboard', path: '/home', icon: 'dashboard' },
          { title: 'Photos', path: '/photos', icon: 'image' },
          { title: 'About', path: '/about', icon: 'view_agenda' },
          { title: 'Contact', path: '/contact', icon: 'contacts' },
          { title: 'Service', path: '/service', icon: 'miscellaneous_services' },
        ],
      items_list: [
          { title: 'Profile', path: '/profile', icon: 'mdi-account' },
          { title: 'Logout', path: '/logout', icon: 'logout' },
        ],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },

    computed: {
    timeline () {
      return this.events.slice().reverse()
    },
  },

mounted(){
            this.list()
        },

  methods: {
    comment () {
      const time = (new Date()).toTimeString()
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents) => {
          return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        }),
      })

      this.input = null
    },


list(){
  axios
      .get('http://127.0.0.1/MyTest/showData.php')
      .then(({data})=>{
                    
                    console.log(data[0])
                    
                }).catch(({ data })=>{
                    console.error(data)
                })
}

  },



  }
</script>


<style scoped>
._caption{
  font-size: 15px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>