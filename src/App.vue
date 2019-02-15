<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SSDL</span>
        <span class="font-weight-light">Auction Bids</span>
        <v-spacer></v-spacer>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    data () {
      return {
        //
      }
    }
  }
</script>
