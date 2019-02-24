<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex v-for="team in winningTeams" xs12 md6 row>
          <v-card class="ma-2">
            <v-card-title>
              <span class="title">{{ team }}</span>
            </v-card-title>
            <v-card-text>
              <p v-for="(value, key) in wonPlayers[team]" :key="key">
              {{ key }}: {{ value.Years }} year<span v-if="value.Years > 1">s</span> at {{ value.AAV.toFixed(2) }}/year <span v-if="value.Breakdown">({{ value.Breakdown }})</span>
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "WinningBids",
    data() {
      return {
        winningTeams: [],
        wonPlayers: {},
      }
    },
    methods: {
      getWinningBids() {
        this.winningTeams = Object.keys(this.bids)
        this.winningTeams.forEach(team => {
          this.wonPlayers[team] = this.bids[team]
        })
      },
    },
    computed: {
      ...mapState({
        bids: state => state.winningBids,
      }),
      date() { return this.$route.params.id }
    },
    mounted() {
      this.getWinningBids();
    }
  }
</script>

<style scoped>

</style>