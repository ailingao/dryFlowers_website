<template>
<div class="yn_shareMain clearfix">
  <div class="yn_share ">
    <p>分享到：</p>
    <div class="yn_sharePlat clearfix">
      <div class="yn_sharePlatLeft col-xs-12 col-sm-8 col-md-8">
        <span>
          <img src="../../assets/images/weixin.png" alt="">
        </span>
        <span>
          <img src="../../assets/images/qzone.png" alt="">
        </span>
        <span>
          <img src="../../assets/images/weibo.png" alt="">
        </span>
        <span>
          <img src="../../assets/images/tcweibo.png" alt="">
        </span>
        <span>
          <img src="../../assets/images/qq.png" alt="">
        </span>
        <span>
          <img src="../../assets/images/renren.png" alt="">
        </span>
        <span>
          <img src="../../assets/images/douban.png" alt="">
        </span>
      </div>
      <div class="yn_sharePlatRight col-xs-12 col-sm-4 col-md-4">
        <div class="yn_handIcon">
          <span class="yn_shareBad">
            <i class="fa fa-thumbs-down"></i>
            <span>12</span>
          </span>
          <span class="yn_shareGood">
            <i class="fa fa-thumbs-up"></i>
            <span>66666</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="btmOthers">
    <div class="col-xs-12 col-sm-6 col-md-6 btmOthersList">
      <span>上一篇：</span>
      <a href="javascript:void(0)">钉子、垫片都用上！有趣父亲节爱心贺卡制作</a>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 btmOthersList">
      <span>下一篇：</span>
      <a href="javascript:void(0)">钉子、垫片都用上！有趣父亲节爱心贺卡制作</a>
    </div>
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
.yn_share{
  margin: 20px 0;
  text-align: left;
}
.yn_share p{
  color: #999;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 1;
}
.yn_sharePlatLeft img{
  width: 32px;
  height: 32px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 10px;
}
.yn_sharePlatRight{
  margin-top: 10px;
}
.yn_shareBad{
  border-radius: 2px;
  padding: 0 15px;
  height: 32px;
  line-height: 31px;
  font-size: 14px;
  text-align: center;
  min-width: 80px;
  color: #fff;
  background-color: #F7B10D;
  display: block;
  margin-right: 10px;
  cursor: pointer;
  float: left;
}
.yn_shareGood{
  border-radius: 2px;
  padding: 0 15px;
  height: 32px;
  line-height: 31px;
  font-size: 14px;
  text-align: center;
  min-width: 80px;
  color: #fff;
  background-color: #FF6651;
  display: block;
  cursor: pointer;
  float: left;
}
.yn_shareGood:hover{
  background: #E65C49;
}
.yn_shareBad:hover{
  background: #DE9F0B;
}
.yn_handIcon{
  min-width: 170px;
  margin: 0 auto;
}
.btmOthersList{
  margin-top: 10px;
}
.btmOthers{
  margin: 20px 0;
}
.btmOthers span{
  color: #999;
  font-size: 12px;
  // overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;
}
.btmOthers a{
  color: #555;
  font-size: 14px;
}
.btmOthersList a:hover{
  color: #FF6651;
}
</style>