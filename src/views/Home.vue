<template>
  <div>
    <Bids date="all_bids"/>
    <!--<router-link :to="{name: 'Old', params: {id: '02_15_19'}}">Old</router-link>-->
  </div>
</template>

<script>
  import Bids from '@/components/Bids'
  export default {
    name: 'Home',
    components: {
      Bids
    },
    data() {
      return {

      }
    },
  }
</script>
