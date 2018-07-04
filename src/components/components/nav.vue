<template>
<div>
  <nav class="navbar navbar-default yn_nav">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <div class="navbar-toggle collapsed yn_menu">
          <span class="sitenav-on"><i class="glyphicon glyphicon-align-justify"></i></span>
        </div>
        <a class="navbar-brand logo" href="#">
          <img class="" src="../../assets/logo.png" alt="">
        </a>
      </div>
      <div class="navbar-toggle collapsed yn_searchIcon">
        <span class="sitenav-on"><i class="glyphicon glyphicon-search"></i></span>
      </div>
      <div class="collapse navbar-collapse" >
        <ul class="nav navbar-nav yn_item">
          <li class="active"><a href="#">首页</a></li>
          <li><a href="#">小制作</a></li>
          <li><a href="#">幼儿</a></li>
          <li><a href="#">小制作</a></li>
          <li><a href="#">幼儿</a></li>
          <li><a href="#">小制作</a></li>
          <li><a href="#">幼儿</a></li>
          <li><a href="#">小制作</a></li>
          <li><a href="#">幼儿</a></li>
          <li><a href="#" class="yn_itemMore">更多<span class="u-arrow u-arrow-down"></span></a></li>
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
            </button>
            <button class=" yn_weiboIcon" type="button">
              <i class="fab fa-weibo"></i>
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
  data(){
    return{
      msg:'nav'
    }
  }
}
</script>
<style lang="less">
.yn_btnGroup{float: right;}
.yn_wxwbIcon{margin-left: 20px;display: block;margin-top: 22px;float: left;}
.yn_weiboIcon{border-radius: 2px;background: #FF8D8D;font-size: 18px ;padding-top: 2px;display: inline-block;width: 36px;height: 32px;padding: 4px 10px;color: #fff;border: none;}
.yn_weixinIcon{border-radius: 2px;background: #7CD673;font-size: 18px;padding-top: 2px;display: inline-block;width: 36px;height: 32px;padding: 4px 10px;color: #fff;border: none;}
.yn_weixinIcon:hover{background: #6AD660;}
.yn_weiboIcon:hover{background: #FF5640;}
.yn_searchGroup{margin-top: 22px;display: block;float: left;}
.yn_searchBtn{width: 36px;height: 32px;padding: 4px 10px;font-size: 14px;background: #FF6651;color: #fff;border: none;margin-left: -4px;}
.yn_searchBtn:focus{outline:none;box-shadow:none;}
.yn_searchBtn:hover{background: #FF5640;}
.yn_keyWordInput{width: 180px !important;height: 32px;border: 1px solid #eee;padding: 0 8px;font-size: 14px;color: #999;}
.yn_keyWordInput:focus{outline:none;box-shadow:none;border: 1px solid #FF6651; }
.container-fluid{max-width: 1266px;}
.u-arrow {display: inline-block;width: 7px;height: 7px;border-top: 1px solid #555;border-right: 1px solid #555;}
.u-arrow-down {transform: rotate(135deg);margin-left: 5px;top: 35px;position: absolute;}
.logo img{height: 40px;margin-top: 20px;margin-right: 70px;padding-left: 15px;}
.yn_nav{/* height: 79px; */border: none;border-bottom: 1px solid #eee;height: auto;background: #fff;}
.navbar-brand{padding: 0;}
.nav>li>a{padding: 0;}
.yn_item li{margin-right: 20px;}
.yn_item li a:hover{color: #FF6651 !important;}
.yn_item li a{border-bottom: 2px solid transparent;padding: 20px 0 18px;font-size: 18px;line-height: 40px;}
.yn_item .active a{color: #FF6651 !important;border-bottom-color: #FF6651;background: #fff !important;}
.yn_menu span i{color: #555;}
.yn_menu{border: none;background: #fff;float: left;}
.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus{background: transparent}
.yn_searchIcon {border: none;background: #fff;margin-right: 0;}
.navbar-collapse{padding: 0;}
@media (max-width: 767px) {
  .logo{display: block;position: absolute;z-index: 2;left: 50%;margin-left: -81px;top: 0;}
  .logo img{margin-top: 7px;}
  .yn_searchIcon{position: absolute;right: 0;top: 0!important;}
}
@media (max-width: 970px) {
  .yn_searchGroup{display: none;}
  .yn_searchIcon{display: block;position: absolute;right: 0;top: 15px;}
  //.navbar-toggle{display: block;}
  //.collapse{display: none;}
}
@media (max-width: 1200px) {
  .yn_item li{margin-right: 10px;}
  .yn_keyWordInput{width: 120px !important;}
  .logo img{margin-right: 15px;}
  .yn_wxwbIcon{display:none;}
}
// @media (min-width: 769px) and (max-width: 1170px) {
//   .logo img{margin-top: 7px;margin-right: 30px;}
// }
</style>
