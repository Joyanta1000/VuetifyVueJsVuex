<template>
  <v-container fluid>
    

<v-app-bar app>
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


    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1 class="h1_tag">OVER 10 YEARS</h1>
<h1 class="h1_tag">IN THE GAME</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
    <div class="d-flex justify-space-between mb-6">
        <div class="pa-1">
          <h3>ABOUT US</h3>
          <p class="p_tag">
            Design with meaning. Dynamicflow is a design and development firm. We work across the design and implementation of ideas that helps businesses to navigate in the competitive marketplace. We specialize in creating branding solutions that has an enduring impact for businesses. We drive results by uncovering, crafting and sharing client’s compelling ideas to create desirable solutions.
          </p>
        </div>
        <div class="pa-2">
          <h3>BUSINESS CONCEPT</h3>
          <p class="p_tag">
            We focus on providing quality service with sustainability in mind for our brand to stand out. Our plan is to leverage our services and use a marketing strategy that is closely aligned with building long-term relationships with our clients. By building a business based on long-term relationship with satisfied clients, we simultaneously build defenses against competition.
          </p>
        </div>
        <div class="pa-3">
          <h3>WOW FACTORS</h3>
          <p class="p_tag">
            <ul>
            <li>We offer “One Stop Solution” for our client’s digital needs</li>
            <li>Our prices are very affordable – normally 10% less than any creative agencies</li>
            <li>Our competitive edge is our Evaluation Period. The clients will have the opportunity to decide whether they want to sign-up with us only after evaluating our skills</li>
            <li>We are passionate about what we do and very flexible</li>
            </ul>
          </p>
        </div>
    </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      items_lists: [
          { title: 'SignIn', path: '/signin', icon: 'mdi-account-key' },
          { title: 'About', path: '/about', icon: 'view_agenda' },
          { title: 'Contact', path: '/contact', icon: 'contacts' },
          { title: 'Service', path: '/service', icon: 'miscellaneous_services' },
        ],
    }
  }
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