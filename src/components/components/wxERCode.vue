<template>
<div class="wxERCode">
   <img src="../../assets/wx.png" alt="">
   <div class="ewm yn_showQRCode">
       <p>官方微信公众号： 云南干花网</p>
       <img src="../../assets/weixinsys.jpg" alt="">
   </div>
</div>
</template>
<script>
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
  }
  
}
</script>
<style lang="less" scoped>
.ewm{
    width: 73%;
    margin: 0 auto;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 5px #ddd;
     border-radius: 5px;
}
.ewm p{
    padding: 8px 14px;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-radius: 5px 5px 0 0;
    color: #777;
    margin-bottom: 0;
}
.ewm img{
    padding: 14px;
}
.wxERCode{
   margin-top: 30px;
}
.wxERCode img{
   width: 100%
   
}
.wxERCode:hover >.yn_showQRCode{
    visibility: visible;opacity: 1;margin-top: -1px;
}
.yn_showQRCode img{width: 100%;}
.yn_showQRCode::before, .yn_showQRCode::after {content: '';position: absolute;top: -10px;left: 50%;margin-left: -5px;border-left: 10px solid transparent;border-right: 10px solid transparent;}
.yn_showQRCode::before {border-bottom: 10px solid #555;}
.yn_showQRCode::after {border-bottom: 10px solid #fff;}
.yn_showQRCode{-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;transition: all .3s ease-in-out;visibility: hidden;opacity: 0;position: absolute;top: 100%;left: 50%;margin-top: 25px !important;background-color: #fff;font-size: 14px;box-shadow: 0 0 10px rgba(0,0,0,0.1);line-height: 32px;width: 260px;margin-left: -130px;list-style: none;text-align: center;border-radius: 2px;z-index: 999;}
</style>
