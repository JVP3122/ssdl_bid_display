<template>
  <div>
    <h1>Landing</h1>
    <Bids date="all_bids"/>
    <h3>abc</h3>
    <router-link :to="{name: 'Old', params: {id: '02_15_19'}}">Old</router-link>
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
