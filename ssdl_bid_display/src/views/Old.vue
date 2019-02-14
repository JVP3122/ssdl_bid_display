<template>
  <Bids :date="date" />
</template>

<script>
  import Bids from '@/components/Bids'
  export default {
    name: "Old",
    components: {
      Bids
    },
    data() {
      return {

      }
    },
    mounted() {
      console.log('this.date', this.date)
    },
    computed: {
      date() { return this.$route.params.id }
    }
  }
</script>

<style scoped>

</style>