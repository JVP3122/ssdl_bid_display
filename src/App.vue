<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SSDL</span>
        <span class="font-weight-light">Auction Bids</span>
        <v-spacer></v-spacer>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn-toggle>
        <v-btn v-for="div in division" :key="div" flat :to="{name: 'Home', params: {id: `${div.toLowerCase()}`}}">{{div}}</v-btn>
      </v-btn-toggle>
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
        division: [
          'RFA',
          'ALW',
          'ALC',
          'NLE',
          'ALE',
          'NLW',
          'NLC',
          '03_03',
          '03_10',
          '03_17'
        ]
      }
    }
  }
</script>
