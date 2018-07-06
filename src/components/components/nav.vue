<template>
<div class="yn_navMain">
  <nav class="navbar navbar-default yn_nav">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-toggle collapsed yn_menu" @click="menu" v-show="menuState">
        <span class="sitenav-on"><i class="glyphicon glyphicon-align-justify"></i></span>
      </div>
      <a class="navbar-brand logo" href="#" v-show="logoState">
        <img class="" src="../../assets/logo.png" alt="">
      </a>
      <div class="navbar-toggle collapsed yn_searchIcon" @click="showSearch" v-show="searchBtnState">
        <span class="sitenav-on"><i class="glyphicon glyphicon-search"></i></span>
      </div>
      <div class="collapse navbar-collapse" >
        <ul class="nav navbar-nav yn_item" v-show="navState">
          <!-- <li class="active li" ><a class="a" href="#">首页</a></li> -->
          <li v-for="(item,index) in 6" :key="index" :class="actIndex==index?'active li':'li'"  @click="toOthers(index)">
            <a class="a" href="#">小制作</a>
            <ul class="yn_itemList">
              <li v-for="(item,index) in 8" :key="index">
                <a href="#">小制作</a>
              </li>
            </ul>
          </li>
          <li class="li"><a href="#" class="yn_itemMore a">更多<span class="u-arrow u-arrow-down"></span></a></li>
        </ul>
        <div class="yn_btnGroup">
          <div class="yn_searchGroup">
            <input type="text" class="yn_keyWordInput" placeholder="请输入关键字">
            <button class="yn_searchBtn" type="button">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </div>
          <div class="yn_wxwbIcon">
            <button class=" yn_weixinIcon" type="button">
              <i class="fab fa-weixin"></i>
              <div class="yn_showQRCode">
                <img src="../../assets/weixinsys.jpg" alt="">
              </div>
            </button>
            <button class=" yn_weiboIcon" type="button">
              <i class="fab fa-weibo"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="yn_searchContainer" v-show="searchContainer">
        <div class=" yn_cancel" type="button" v-show="cancelState" @click="cancel">
          <i class="glyphicon glyphicon-remove"></i>
        </div>
        <div class="yn_btnGroupTwo" v-show="searchState">
          <div class="yn_searchGroupTwo">
            <input :style="width" type="text" class="yn_keyWordInputTwo" placeholder="请输入关键字">
            <button class="yn_searchBtn Two" type="button">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>
<script>
$(function(){
  
})
export default {
  props:['state'],
  data(){
    return{
      searchState:false,//搜索框状态
      navState:true,//导航栏状态
      logoState:true,//图标状态
      searchBtnState:true,//搜索按钮状态
      cancelState:false,//取消按钮状态
      searchContainer:false,
      menuState:true,
      screenWidth: '',
      width:'',
      actIndex:'0',//默认显示激活的选项
    }
  },
  methods:{
    showSearch(){
      if(this.screenWidth>768&&this.screenWidth<900){
        this.searchState=true
        this.navState=false
        this.searchBtnState=false
        this.cancelState=true
        this.logoState=false
        this.searchContainer=true
      }else if(this.screenWidth<=768){
        this.menuState=false
        this.searchState=true
        this.searchBtnState=false
        this.cancelState=true
        this.logoState=false
        this.searchContainer=true
      }
    },
    cancel(){
      if(this.screenWidth>768&&this.screenWidth<900){
        this.searchState=false
        this.navState=true
        this.searchBtnState=true
        this.cancelState=false
        this.logoState=true
        this.searchContainer=false
      }else if(this.screenWidth<=768){
        this.menuState=true
        this.searchState=false
        this.searchBtnState=true
        this.cancelState=false
        this.logoState=true
        this.searchContainer=false
      }
    },
    menu(){
      this.$emit('menuClick','0')
      this.menuState=false
    },
    toOthers(index){
      this.actIndex=index
    }
  },
  mounted () {
      const that = this
      window.onresize = () => {
          return (() => {
              window.screenWidth = document.body.clientWidth
              that.screenWidth = window.screenWidth
          })()
      }
  },
  created(){
    this.screenWidth=document.documentElement.clientWidth || document.body.clientWidth
  },
  watch: {
      screenWidth (val) {
          this.screenWidth = val
          this.width='width:'+(val-95)+'px!important'
          if(this.screenWidth>=900){
            this.searchState=false
            this.navState=true
            this.searchBtnState=true
            this.cancelState=false
            this.logoState=true
            this.searchContainer=false
          }
          // else if(this.screenWidth>768&&this.screenWidth<900){
          //   this.searchState=false
          //   this.navState=true
          //   this.searchBtnState=true
          //   this.cancelState=false
          //   this.logoState=true
          //   this.searchContainer=false
          // }
      },
      state(val){
        if(!val){
          this.menuState=true
        }
      }
  }
}
</script>
<style lang="less" scoped>
.yn_showQRCode img{width: 100%;}
.yn_showQRCode::before, .yn_showQRCode::after {content: '';position: absolute;top: -5px;left: 50%;margin-left: -3px;border-left: 5px solid transparent;border-right: 5px solid transparent;}
.yn_showQRCode::before {border-bottom: 5px solid #555;}
.yn_showQRCode::after {border-bottom: 5px solid #fff;margin-top: 1px;}
.yn_showQRCode{-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;transition: all .3s ease-in-out;visibility: hidden;opacity: 0;position: absolute;top: 100%;left: 50%;margin-top: 25px !important;background-color: #fff;font-size: 14px;padding: 6px 0;border: 1px solid #999;box-shadow: 0 0 10px rgba(0,0,0,0.1);line-height: 32px;width: 140px;margin-left: -78px;list-style: none;text-align: center;border-radius: 2px;z-index: 999;}
.yn_weixinIcon:hover>.yn_showQRCode{visibility: visible;opacity: 1;margin-top: -1px;}

.yn_itemList::before, .yn_itemList::after {content: '';position: absolute;top: -5px;left: 50%;margin-left: -3px;border-left: 5px solid transparent;border-right: 5px solid transparent;}
.yn_itemList::before {border-bottom: 5px solid #555;}
.yn_itemList::after {border-bottom: 5px solid #fff;margin-top: 1px;}

.yn_itemList li a{display: block;text-decoration: none;color: #555;}
.yn_itemList li{list-style: none;text-align: center;position: relative;}
.yn_itemList li :hover{background: #eee;color: #FF6651!important;}
.yn_itemList{padding: 0;}
.yn_itemList{-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;transition: all .3s ease-in-out;visibility: hidden;opacity: 0;position: absolute;top: 100%;left: 50%;margin-top: -25px;background-color: #fff;font-size: 14px;padding: 6px 0;border: 1px solid #999;box-shadow: 0 0 10px rgba(0,0,0,0.1);line-height: 32px;width: 140px;margin-left: -78px;list-style: none;text-align: center;border-radius: 2px;z-index: 999;}
.yn_btnGroup{float: right;}
.yn_searchGroup{margin-top: 22px;display: block;float: left;}
.yn_keyWordInput{width: 180px !important;height: 32px;border: 1px solid #eee;padding: 0 8px;font-size: 14px;color: #999;border-radius: 0;}
.yn_keyWordInput:focus{outline:none;box-shadow:none;border: 1px solid #FF6651; }
.yn_searchBtn{width: 36px;height: 32px;padding: 4px 10px;font-size: 14px;background: #FF6651;color: #fff;border: none;margin-left: -4px;}
.yn_searchBtn:focus{outline:none;box-shadow:none;}
.yn_searchBtn:hover{background: #FF5640;color:#eee;}
.yn_btnGroupTwo{float: right;}
.yn_searchGroupTwo{margin-top: 22px;display: block;float: left;}
.yn_keyWordInputTwo{width: 180px !important;height: 32px;border: 1px solid #eee;padding: 0 8px;font-size: 14px;color: #999;border-radius: 0;}
.yn_keyWordInputTwo:focus{outline:none;box-shadow:none;border: 1px solid #FF6651; }
.yn_searchBtnTwo{width: 36px;height: 32px;padding: 4px 10px;font-size: 14px;background: #FF6651;color: #fff;border: none;margin-left: -4px;}
.yn_searchBtnTwo:focus{outline:none;box-shadow:none;}
.yn_searchBtnTwo:hover{background: #FF5640;color:#eee;}
.yn_cancel{float: right;font-size: 18px;margin-top: 27px;margin-left: 10px;color: #555;}
.yn_cancel:hover{color: #333;}
.yn_wxwbIcon{margin-left: 20px;display: block;margin-top: 22px;float: left;}
.yn_weiboIcon{border-radius: 2px;background: #FF8D8D;font-size: 18px ;padding-top: 2px;display: inline-block;width: 36px;height: 32px;padding: 4px 10px;color: #fff;border: none;}
.yn_weixinIcon{border-radius: 2px;background: #7CD673;font-size: 18px;padding-top: 2px;display: inline-block;width: 36px;height: 32px;padding: 4px 10px;color: #fff;border: none;position: relative;}
.yn_weixinIcon:hover{background: #6AD660;}
.yn_weiboIcon:hover{background: #FF5640;}
.container-fluid{max-width: 1200px;position: relative;}
.u-arrow {display: inline-block;width: 7px;height: 7px;border-top: 1px solid #555;border-right: 1px solid #555;}
.u-arrow-down {transform: rotate(135deg);margin-left: 5px;top: 35px;position: absolute;}
.logo img{height: 40px;margin-top: 20px;margin-right: 50px;padding-left: 15px;}
.yn_nav{/* height: 79px; */border: none;height: auto;background: #fff;}
.navbar-brand{padding: 0;}
.nav>li>a{padding: 0;}
.yn_item .li{margin-right: 20px;position: relative;}
.yn_item .li:hover>.yn_itemList{visibility: visible;opacity: 1;margin-top: -1px;}
.yn_item .li:hover>.a{color: #FF6651 !important;}
.yn_item .li:hover>.a span{border-top: 1px solid #FF6651;border-right: 1px solid #FF6651;}
.yn_item .li .a{border-bottom: 2px solid transparent;padding: 20px 0 18px;font-size: 18px;line-height: 40px;}
.yn_item .active .a{color: #FF6651 !important;border-bottom-color: #FF6651;background: #fff !important;}
.yn_menu span i{color: #555;}
.yn_menu{border: none;background: #fff;float: left;padding-left: 0;}
.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus{background: transparent}
.yn_searchIcon {border: none;background: #fff;margin-right: 0;padding-right: 15px;}
.navbar-collapse{padding: 0;}

@media (max-width: 1200px) {
  .yn_item .li{margin-right: 10px;}
  .yn_keyWordInput{width: 120px !important;}
  .logo img{margin-right: 30px;}
  
}
@media (max-width: 992px) {
  .yn_wxwbIcon{display: none;}
}
@media (max-width: 900px) {
  .yn_btnGroup{display: none;}
  .yn_searchIcon{display: block;position: absolute;right: 0;top: 15px;}
  .yn_nav{height: 79px;}
}
@media (max-width: 767px) {
  .logo{display: block;position: absolute;z-index: 2;left: 50%;margin-left: -81px;top: 0;}
  .logo img{margin-top: 7px;}
  .yn_searchIcon{position: absolute;right: 0;top: 0!important;}
  .yn_nav{height: 54px;}
  .yn_searchGroupTwo{margin-top: 11px;}
  .yn_cancel{margin-top: 15px;}
}
</style>
