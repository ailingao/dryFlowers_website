<template>
<div :class="sliderState?classOne:classOneTwo">
  <!-- 移动端左侧导航条 -->
  <mobileNav @menuClickTwo="getMenuClickTwo"></mobileNav>
  <!-- 移动端左侧导航条 -->
  <!-- 网站内容 -->
  <div class="yn_mainContent clearfix" :style="height">
    <!-- 遮罩层 -->
    <div class="yn_mask" @click="hideSlider"></div>
    <!-- 遮罩层 -->
    <!-- 网站pc导航栏 -->
    <navbar :state="state" @menuClick="getMenuClick"></navbar>
    <!-- 网站pc导航栏 -->
    <!-- 广告位 -->
    <advertSpace></advertSpace>
    <!-- 广告位 -->
    <!-- 下方左右布局内容 -->
    <div class="yn_container container-fluid">
      <div class="row clearfix">
        <div class="col-xs-12 col-sm-12 col-md-8 yn_containerLeft">
          <!-- 主页中心 左侧-->
          <div class="yn_mainLeft">
            <breadcrumb></breadcrumb>
            <ynlabel></ynlabel>
            <leftBoxTwo></leftBoxTwo>
            <pagination></pagination>
          </div>
          <!-- <mainLeft></mainLeft> -->
          <!-- 主页中心 左侧-->
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 yn_containerRight">
          <!-- 主页右侧模块一 -->
          <rightBoxOne></rightBoxOne>
           <!-- 主页右侧模块一 结束-->
        </div>
      </div>
     
    </div>
    <!-- 下方左右布局内容 -->
    <!-- 页脚 -->
      <bottomFooter></bottomFooter>
    <!-- 页脚 -->
  </div>
  <!-- 网站内容 -->
 
</div>
</template>
<script>
import mobileNav from '../components/mobileNav.vue'
import advertSpace from '../components/advertSpace'
import mainLeft from '../components/mainLeft'
import rightBoxTwo from '../components/rightBoxTwo'
import rightBoxOne from '../components/rightBoxOne'
import wxERCode from '../components/wxERCode'
import bottomFooter from '../components/bottomFooter'
import swiper from '../components/swiper'
import leftBoxOne from '../components/leftBoxOne'
import leftBoxTwo from '../components/leftBoxTwo'
import ynlabel from '../components/label'
import pagination from '../components/pagination'
import breadcrumb from '../components/breadcrumb'
export default {
  data(){
    return{
      msg:'index',
      height:'',
      sliderState:false,
      state:'',
      classOne:'yn_main slider_nav',
      classOneTwo:'yn_main'
    }
  },
  created(){
    this.height='height:'+(document.documentElement.clientHeight || document.body.clientHeight)+'px'
  },
  methods:{
    getMenuClick(val){//接收主菜单导航按钮点击传值
      if(val=='0'){
        this.sliderState=true
        this.state=true
      }
    },
    getMenuClickTwo(val){//接收侧边栏菜单导航按钮点击传值
      if(val=='1'){
        if(this.sliderState){
          this.classOneTwo='yn_main slider_nav slider_navTwo'
        }
        this.sliderState=false
        this.state=false
      }
    },
    hideSlider(){//点击遮罩层
      this.sliderState=false
      this.state=false
    }
  },
  components:{
    mobileNav,
    advertSpace,
    mainLeft,
    rightBoxTwo,
    rightBoxOne,
    wxERCode,
    bottomFooter,
    swiper,
    leftBoxOne,
    leftBoxTwo,
    ynlabel,
    pagination,
    breadcrumb

  }
}
</script>
<style scoped>
  .slider_nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: translateX(80%);
    transform: translateX(80%);
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
  }
  .slider_navTwo{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    overflow-y: scroll;
  }
  .slider_nav .yn_mask{
    display: block;
  }
  .slider_navTwo .yn_mask{
    display: none !important;
  }
  .yn_mask{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999990;
    background-color: #222;
    background-color: rgba(0,0,0,0.7);
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
  .container-fluid{
    max-width: 1200px;
  }
  .yn_container{
    padding-bottom: 10px;
  }
  .yn_mainContent{
    /* overflow-y: scroll; */
  }
  @media (max-width: 767px) {
    .yn_containerRight{display: none;}
  }
  @media (max-width: 992px) {
    .wxERCode{display: none;}
  }
</style>

