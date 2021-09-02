<template>

<v-container>
     <v-navigation-drawer app>
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

  <v-app-bar style="background-color: DarkGreen;" app>

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
<h1>My Profile</h1>
</v-container>

    
</template>

<script>
export default {
    data() {
        return {
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
        }
    },
}
</script>