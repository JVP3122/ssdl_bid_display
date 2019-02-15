<template>
  <div>
    <!--<Bids date="all_bids"/>-->
    <!--<router-link :to="{name: 'Old', params: {id: '02_15_19'}}">Old</router-link>-->
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    computed: {
      date() { return this.$route.params.id }
    },
    mounted() {
      this.$store.dispatch('getPlayerBids', this.date);
      this.$store.dispatch('getAllBids', this.date);
      this.$store.dispatch('getWinningBids', this.date);
      this.$router.push({name: 'Winning', params: {id: this.date }})
    }
  }
</script>
