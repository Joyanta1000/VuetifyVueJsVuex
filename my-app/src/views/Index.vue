<template>
  <v-container>
     <!-- <v-navigation-drawer app>
    <v-list-item>
        <v-list-item-content>
          
          <v-list-item-title class="text-h6">
             Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
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
  </v-navigation-drawer> -->

  <v-app-bar app>

     <v-list-item  >
        <v-list-item-content>
          
          <v-list-item-title class="text-h6" to="/"
                link>
             My Application
          </v-list-item-title>
          <v-list-item-subtitle>
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
                <v-icon style="color: black;">mdi-dots-vertical</v-icon>
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
  <v-row>
<v-col>

</v-col>

<v-col>


 <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  <br>

 <v-row >
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
<br><br>
<v-card
    class="mx-auto"
    color="grey lighten-4"
    max-width="600"
  >
    <v-card-title>
      <v-icon
        :color="checking ? 'red lighten-2' : 'indigo'"
        class="mr-12"
        size="64"
        @click="takePulse"
      >
        mdi-heart-pulse
      </v-icon>
      <v-row align="start">
        <div class="text-caption grey--text text-uppercase">
          Heart rate
        </div>
        <div>
          <span
            class="text-h3 font-weight-black"
            v-text="avg || '—'"
          ></span>
          <strong v-if="avg">BPM</strong>
        </div>
      </v-row>

      <v-spacer></v-spacer>

      <v-btn
        icon
        class="align-self-start"
        size="28"
      >
        <v-icon>mdi-arrow-right-thick</v-icon>
      </v-btn>
    </v-card-title>

    <v-sheet color="transparent">
      <v-sparkline
        :key="String(avg)"
        :smooth="16"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        :value="heartbeats"
        auto-draw
        stroke-linecap="round"
      ></v-sparkline>
    </v-sheet>
  </v-card>

<br>

  <!-- <v-row>
    <v-col>

<v-card-text class="font-weight-medium mt-12 text-subtitle-1">
            
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates atque mollitia nemo dolorem ab.
              
        
          </v-card-text>

    </v-col>
    <v-col>

<v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
            <v-layout justify-center align-center>
              <v-flex shrink>
            <v-img
  lazy-src="../assets/person_2.jpg"
  max-height="150"
  max-width="250"
  src="../assets/person_2.jpg"
  
></v-img>
              </v-flex>
            </v-layout>
          </v-card-text>

    </v-col>
  </v-row> -->
  
  <!-- <br> -->

  <v-row >
    <v-col
      cols="12"
      sm="6"
      
    >
      <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="350"
          max-width="350"
        >
          <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1" >
            <v-layout justify-center align-center class="pa-md-4 mx-lg-auto">
              <v-flex shrink>
            <v-img
  lazy-src="../assets/person_1.jpeg"
  max-height="150"
  max-width="250"
  src="../assets/person_1.jpeg"
></v-img>
              </v-flex>
              
            </v-layout>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates atque mollitia nemo dolorem ab.
          </v-card-text>
          
        </v-card>
      </v-hover>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      class="pa-md-4 mx-lg-auto"
    >
      <v-hover
        v-slot="{ hover }"
        close-delay="200"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="350"
          max-width="350"
        >
          <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
            <v-layout justify-center align-center class="pa-md-4 mx-lg-auto">
              <v-flex shrink>
            <v-img
  lazy-src="../assets/person_2.jpg"
  max-height="150"
  max-width="250"
  src="../assets/person_2.jpg"
  
></v-img>
              </v-flex>
            </v-layout>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates atque mollitia nemo dolorem ab.
          </v-card-text>

          

        </v-card>
      </v-hover>
    </v-col>
    
  </v-row>


</v-col>

<v-col>

</v-col>
  
</v-row>
  </v-container>


</template>


<script>
  const exhale = ms =>
    new Promise(resolve => setTimeout(resolve, ms))

  export default {
    name: 'index',
    data: () => ({
      checking: false,
      heartbeats: [],
      items_lists: [
          { title: 'SignIn', path: '/signin', icon: 'mdi-account-key' },
          { title: 'About', path: '/about', icon: 'view_agenda' },
          { title: 'Contact', path: '/contact', icon: 'contacts' },
          { title: 'Service', path: '/service', icon: 'miscellaneous_services' },
        ],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }),

    icons: {
    iconfont: 'mdi', // default - only for display purposes
  },

    computed: {
      avg () {
        const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
        const length = this.heartbeats.length

        if (!sum && !length) return 0

        return Math.ceil(sum / length)
      },
    },

    created () {
      this.takePulse(false)
    },

    methods: {
      heartbeat () {
        return Math.ceil(Math.random() * (120 - 80) + 80)
      },
      async takePulse (inhale = true) {
        this.checking = true

        inhale && await exhale(1000)

        this.heartbeats = Array.from({ length: 20 }, this.heartbeat)

        this.checking = false
      },
    },
  }
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>