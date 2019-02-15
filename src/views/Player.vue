<template>
  <div>
    <v-layout column>
      <v-flex shrink>
        <v-layout row justify-end fill-height>
          <v-btn @click="goToWinning" color="red darken-1" dark round depressed ripple>Winning Bids</v-btn>
          <v-btn @click="goToAll" color="light-blue darken-2" dark round depressed ripple>All Bids</v-btn>
          <v-btn @click="" color="blue-grey darken-2" dark round depressed ripple>Bids by Player</v-btn>
        </v-layout>
      </v-flex>
      <PlayerBids />
    </v-layout>
  </div>
</template>

<script>
  import PlayerBids from '@/components/PlayerBids'
  export default {
    name: "Player",
    components: {
      PlayerBids
    },
    data() {
      return {
      }
    },
    methods: {
      goToWinning() {
        this.$router.push({name: 'Winning', params: {id: this.date }})
      },
      goToAll() {
        this.$router.push({name: 'All', params: {id: this.date }})
      },
    },
    computed: {
      date() { return this.$route.params.id }
    }
  }
</script>

<style scoped>

</style>