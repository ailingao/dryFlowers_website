<template>
  <div class="leftBoxOne clearfix">
    <div class="yn_topTips">
      <div class="yn_toptipsLeft">
        <span class="yn_title"> 原创投稿</span>
        <span class="glyphicon glyphicon-hand-down"></span>
      </div>
      <div class="yn_toptipsRight">
        <span class="yn_title">我要投稿</span>
        <span class="fa fa-angle-double-right"></span>
      </div>
    </div>
    <div class="yn_originalMain clearfix">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 yn_original" v-for="(item,index) in 7" :key="index" @click="toOthers">
        <div class="yn_originalItem col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <span class="glyphicon glyphicon-minus"></span>
          <span class="span">晚晨的创意DIY：废旧电脑键盘鼠标制作机器人</span>
        </div>
        <div class="yn_originalTime col-xs-3 col-sm-3 col-md-3 col-lg-3">2018-6-23</div>
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
    toOthers(){
      this.$router.push({'path':'/detail'})
    }
  },

  created(){
    
  },
  components:{

  }
  
}
</script>
<style lang="less" scoped>
//标题
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
.yn_toptipsLeft .yn_title{
  font-weight: bold;
}
.yn_originalMain{
  padding: 5px 0 15px 0;
}
.yn_original{
  height: 30px;
  color: #bbb;
  line-height: 30px;
  font-size: 12px;
  padding: 0 0 0 20px;
  cursor: pointer;
}
.yn_original:hover{
  color: #ff6651 !important;
}
.yn_originalItem .span{
  color: #555;
  font-size: 14px;
  padding-left: 10px;
}
.yn_originalItem:hover>span{
  color: #ff6651;
}
.yn_originalItem{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0;
  text-align: left;
}
.yn_originalTime{
  padding: 0;
  text-align: right;
}
.yn_label li{
  float: left;
  background: #576663;
  color: #fff;
  height: 28px;
  line-height: 28px;
  font-size: 13px;
  text-align: center;
  padding: 0 6px;
  border-radius: 2px;
  list-style: none;
  margin: 0 5px;
  cursor: pointer;
}
.yn_label li:hover{
  background: #ff6651;
}
.yn_labelActive{
  background: #ff6651;
}
</style>