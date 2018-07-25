<template>
<div :class="sliderState?classOne:classOneTwo">
  <!-- 移动端左侧导航条 -->
  <mobileNav @menuClickTwo="getMenuClickTwo" :baseData='baseData'></mobileNav>
  <!-- 移动端左侧导航条 -->
  <!-- 网站内容 -->
  <div class="yn_mainContent clearfix" :style="height">
    <!-- 遮罩层 -->
    <div class="yn_mask" @click="hideSlider"></div>
    <!-- 遮罩层 -->
    <!-- 网站pc导航栏 -->
    <navbar :state="state" :baseData='baseData' @menuClick="getMenuClick"></navbar>
    <!-- 网站pc导航栏 -->
    <router-view :baseData='baseData' :listData='listData'></router-view>
    
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

import * as baseUrl from '../../assets/js/url.js'
export default {
  data(){
    return{
      msg:'index',
      height:'',
      sliderState:false,
      state:'',
      classOne:'yn_main slider_nav',
      classOneTwo:'yn_main',
      baseData:'',//基本数据
      listData:''
    }
  },
  created(){
    this.height='height:'+(document.documentElement.clientHeight || document.body.clientHeight)+'px'
    this.initData()//获取网页基本信息
    this.list()//获取网页列表信息
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
    },
    initData(){
      var that=this
      let data = that.$qs.stringify({
          param: JSON.stringify({
              
          })
      })
      that.$ajax({
          url: `${baseUrl.base}`,
          method: 'post',
          data: data 
      })
      .then(res => {
        console.log(res)
        that.baseData=res.data
      })
      .catch(err => {
        console.log(err);
      });
    },
    list(){
      var that=this
      let data = that.$qs.stringify({
          param: JSON.stringify({
              pageNo:'1',
              pageSize:'10',
              name:'文章'
          })
      })
      that.$ajax({
          url: `${baseUrl.articleList}`,
          method: 'post',
          data: data 
      })
      .then(res => {
        console.log(res)
        that.listData=res.data
      })
      .catch(err => {
        console.log(err);
      });
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
</style>

