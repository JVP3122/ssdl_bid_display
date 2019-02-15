<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex v-for="player in playersBid" xs12 md6 row>
          <v-card class="ma-2">
            <v-card-title>
              <span class="title">{{ player }}</span>
            </v-card-title>
            <v-card-text>
              <p v-for="(value, key) in playerByTeam[player]">
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
    name: "PlayerBids",
    data() {
      return {
        playersBid: [],
        playerByTeam: {},
      }
    },
    methods: {
      getPlayerBids() {
        this.playersBid = Object.keys(this.bids)
        this.playersBid.forEach(player => {
          this.playerByTeam[player] = this.bids[player]
        })
      },
    },
    computed: {
      ...mapState({
        bids: state => state.playerBids,
      }),
      date() { return this.$route.params.id },
    },
    mounted() {
      this.getPlayerBids();
    }
  }
</script>

<style scoped>

</style>