<template>
  <div class="leftBoxTwo clearfix">
    <div class="yn_topTipsTwo">
      <div class="yn_toptipsLeft">
        <span class="yn_title">相关内容</span>
      </div>
    </div>
    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 yn_imgItem" v-for="(item,index) in 13" :key="index">
      <a href="javascript:void(0)" class="yn_goLink">
        <img src="../../assets/images/4-1PF61254400-L.jpg" alt="">
        <a class="a" href="javascript:void(0)">麂皮绳手链的编法图解 双色皮革编织手链教程343423432423</a>
      </a>
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
// .leftBoxTwo{
//   overflow: hidden;
// }
//标题
.yn_topTipsTwo{
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
.yn_imgItem{
  margin-top: 15px;
  padding: 0 5px 10px ;
  //border: 1px solid #eee;
  cursor: pointer;
}
// .yn_imgItem:hover{
//   border: 1px solid #ff6651;
// }
.yn_imgItem img{
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.yn_imgItem .a{
  line-height: 25px;
  height: 50px;
  font-size: 14px;
  overflow: hidden;
  float: left;
  padding: 0px 10px 0 10px;
  text-align: left;
  color: #555;
  text-decoration: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.yn_goLink a:hover{
  color: #ff6651;
}
.yn_imgItemBtm{
  padding: 10px 10px;
  overflow: hidden;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.yn_imgItem:hover>.yn_imgItemBtm{
  border-color: #ff6651;
}
.yn_imgItem:hover>.yn_goLink>img{
  border-color: #ff6651;
}
.yn_imgItem:hover>.yn_goLink>.a{
  border-color: #ff6651;
}
.yn_btmleft{
  float: left;
  color: #bbb;
  font-size: 12px;
}
.yn_btmright{ 
  float: right;
  color: #bbb;
  font-size: 12px;
}
.yn_btmright:hover{
  color: #ff6651;
  cursor: pointer; 
}
.yn_toptipsLeft .yn_title{
  font-weight: bold;
}
</style>