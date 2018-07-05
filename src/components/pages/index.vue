<template>
<div>
  <!-- <navbar></navbar> -->
  <mobileNav></mobileNav>
</div>
</template>
<script>
import mobileNav from '../components/mobileNav.vue'
export default {
  data(){
    return{
      msg:'index'
    }
  },
  components:{
    mobileNav
  }
}
</script>
