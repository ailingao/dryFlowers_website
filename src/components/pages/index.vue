<template>
<div :class="sliderState?classOne:classOneTwo">
  <mobileNav @menuClickTwo="getMenuClickTwo"></mobileNav>
  <div class="yn_mainContent" :style="height">
    <div class="yn_mask" @click="hideSlider"></div>
    <navbar :state="state" @menuClick="getMenuClick"></navbar>
  </div>
</div>
</template>
<script>
import mobileNav from '../components/mobileNav.vue'
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
    mobileNav
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
</style>

