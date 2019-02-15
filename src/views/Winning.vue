<template>
  <div>
    <v-layout column>
      <v-flex shrink>
        <v-layout row justify-end fill-height>
          <v-btn @click="" color="red darken-1" dark round depressed ripple>Winning Bids</v-btn>
          <v-btn @click="goToAll" color="light-blue darken-2" dark round depressed ripple>All Bids</v-btn>
          <v-btn @click="goToPlayers" color="blue-grey darken-2" dark round depressed ripple>Bids by Player</v-btn>
        </v-layout>
      </v-flex>
      <WinningBids />
    </v-layout>
  </div>
</template>

<script>
  import WinningBids from '@/components/WinningBids'
  export default {
    name: "Winning",
    components: {
      WinningBids
    },
    data() {
      return {
      }
    },
    methods: {
      goToAll() {
        this.$router.push({name: 'All', params: {id: this.date }})
      },
      goToPlayers() {
        this.$router.push({name: 'Player', params: {id: this.date }})
      }
    },
    computed: {
      date() { return this.$route.params.id }
    }
  }
</script>

<style scoped>

</style>