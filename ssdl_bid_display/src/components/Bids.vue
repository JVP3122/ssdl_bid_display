<template>
  <div>
    {{ bids }}
    <ul v-for="team in bids">
      <li v-for="player in team">
        {{ player }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Bids",
    data() {
      return {
        bids: {},
        items: [],
        headers: [],
      }
    },
    methods: {
      getBids() {
        this.bids = require('@/assets/bids/test/temp_bids.json');
      },
      parseBids() {
        Object.keys(this.bids).forEach(bid => {
          this.bids[bid] = JSON.parse(this.bids[bid])
          console.log('bid', bid)
          console.log('this.bids[bid]', this.bids[bid])
        })
      },
    },
    mounted() {
      this.getBids();
      this.parseBids();
      console.log('this.bids', this.bids)
    }
  }
</script>

<style scoped>

</style>