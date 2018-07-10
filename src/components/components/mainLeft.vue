<template>
<div class="yn_mainLeft">
  <div class="yn_topTips">
    <span class="glyphicon glyphicon-volume-up yn_tipsIcon"></span>
    <span> 微信公众号：DIY手工制作小站 ，欢迎关注！</span>
  </div>
  <swiper></swiper>
  <breadcrumb></breadcrumb>
  <ynlabel></ynlabel>
  <leftBoxOne></leftBoxOne>
  <leftBoxTwo></leftBoxTwo>
  <pagination></pagination>
</div>
</template>
<script>
import swiper from '../components/swiper'
import leftBoxOne from '../components/leftBoxOne'
import leftBoxTwo from '../components/leftBoxTwo'
import ynlabel from '../components/label'
import pagination from '../components/pagination'
import breadcrumb from '../components/breadcrumb'
export default {
  data(){
    return{
      
    }
  },
  methods:{
    
  },

  created(){
    
  },
  components:{
    swiper,
    leftBoxOne,
    leftBoxTwo,
    ynlabel,
    pagination,
    breadcrumb
  }
  
}
</script>
<style lang="less" scoped>
.yn_swiperImg{
  width: 100%;
}
</style>
