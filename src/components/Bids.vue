<template>
  <div>
    <v-card>
      <v-card-title>
        <p class="title">RFA Auction</p>
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
        :items="items"
        :search="search"
      >
        <template slot="items" slot-scope="props">
          <td v-for="header in headers">
            {{ props.item[header.value] }}
          </td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "Bids",
    props: ['date'],
    data() {
      return {
        title: '',
        search: '',
        bids: {},
        items: [],
        headers: [
          {text: 'Player', value: 'player', sortable: true, align: 'center'},
          {text: 'ARZ', value: 'ARZ', sortable: true, align: 'center'},
          {text: 'ATL', value: 'ATL', sortable: true, align: 'center'},
          {text: 'BAL', value: 'BAL', sortable: true, align: 'center'},
          {text: 'BOS', value: 'BOS', sortable: true, align: 'center'},
          {text: 'CHC', value: 'CHC', sortable: true, align: 'center'},
          {text: 'CLE', value: 'CLE', sortable: true, align: 'center'},
          {text: 'DET', value: 'DET', sortable: true, align: 'center'},
          {text: 'KC', value: 'KC', sortable: true, align: 'center'},
          {text: 'LAD', value: 'LAD', sortable: true, align: 'center'},
          {text: 'MIL', value: 'MIL', sortable: true, align: 'center'},
          {text: 'NYM', value: 'NYM', sortable: true, align: 'center'},
          {text: 'NYY', value: 'NYY', sortable: true, align: 'center'},
          {text: 'OAK', value: 'OAK', sortable: true, align: 'center'},
          {text: 'PHI', value: 'PHI', sortable: true, align: 'center'},
          {text: 'PIT', value: 'PIT', sortable: true, align: 'center'},
          {text: 'TB', value: 'TB', sortable: true, align: 'center'},
          {text: 'TOR', value: 'TOR', sortable: true, align: 'center'},
          {text: 'WAS', value: 'WAS', sortable: true, align: 'center'},
        ],
      }
    },
    methods: {
      getBids() {
        this.bids = require(`@/assets/bids/${this.date}.json`);
      },
      parseBids() {
        Object.keys(this.bids).forEach(bid => {
          this.bids[bid] = JSON.parse(this.bids[bid])
        })
      },
      createItems() {
        this.items = Object.entries(this.bids).map(entry => {
          let playerObject = {
            player: entry[0]
          }
          Object.entries(entry[1]).forEach(bid => {
            const breakdown = bid[1].Breakdown ? ` (${bid[1].Breakdown})` : ``
            playerObject[bid[0]] = `${bid[1].Years}/${Number(bid[1].AAV).toFixed(2)}${breakdown}`
          })
          return playerObject
        })
      }
    },
    mounted() {
      this.getBids();
      try {
        this.parseBids();
      } catch(err) {
      }
      this.createItems();
    }
  }
</script>

<style scoped>

</style>