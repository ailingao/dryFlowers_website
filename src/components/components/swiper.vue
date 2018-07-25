<template>
<div class="swiper">
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in baseData.posters" :key="index">
      <img :src="item.image_url" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>
<script>
export default {
  props:['baseData'],
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

.yn_swiperImg{
  width: 100%;
}

.yn_toptipsLeft .yn_title{
  font-weight: bold;
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
</style>
