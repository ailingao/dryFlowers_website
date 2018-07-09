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
.yn_topTips{
  background: #fafafa;
  border-bottom: 1px solid #ddd;
  line-height: 45px;
  font-size: 16px;
  color: #666;
  text-align: left;
  padding: 0 10px;
  margin-top: 10px;
  overflow: hidden;
}
.yn_tipsIcon{
  color: #ff6651;
}
.yn_toptipsRight{
  float: right;
}
.yn_toptipsRight{
  color: #666;
  font-weight: normal;
  font-size: 12px;
  cursor: pointer;
}
.yn_toptipsRight span:hover{
  color: #ff6651;
}
.yn_toptipsLeft{
  float: left;
}

.yn_swiperImg{
  width: 100%;
}

.yn_toptipsLeft .yn_title{
  font-weight: bold;
}


</style>
