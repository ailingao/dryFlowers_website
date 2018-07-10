<template>
<div>
    <div class="yn_topTips">
      <div class="yn_toptipsLeft">
        <span class="yn_title"> 最近更新</span>
        <span class="glyphicon glyphicon-hand-down"></span>
      </div>
      <div class="yn_toptipsRight">
        <span class="yn_title">手工艺品</span>
        <span>传统手工</span>
        <span>手工达人</span>
        <i class="fa fa-angle-double-right"></i>
      </div>
    </div>
    <div class="rightModel2 clearfix">
        <div class="col-sm-3 col-md-4 col-lg-4" v-for="(item,index) in 29" :key="index">
            <a href="">
                干枯玫瑰
            </a>
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
//右侧模块2
.rightModel2 {
  margin-top: 5px;
}
.rightModel2 >div{
  padding-left: 2px;
  padding-right: 2px;
}
.rightModel2 a{
    display: block;
    color: #999;
    background-color: #f6f6f6;
    line-height: 30px;
    margin-bottom: 5px;
}
.rightModel2 a:hover{
  color: #fff;
  background: #FF6651;
}

</style>