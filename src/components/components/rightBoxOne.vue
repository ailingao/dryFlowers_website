<template>
<div>
    <div class="yn_topTips">
        <span> 微信公众号：DIY手工制作小站 ，欢迎关注！</span>
    </div>
    <div class="rightModel clearfix">
        <div class="col-md-4" v-for="(item,index) in 8" :key="index">
            <a href="">
            <img src="https://www.shouyihuo.com/uploads/allimg/180606/4-1P6061552570-L.jpg" class="img-responsive" alt="干花">
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
}

//右侧模块1
.rightModel{
  margin-top: 15px;
  margin-bottom: 20px;
}
.rightModel>div{
  padding-left: 2px;
  padding-right: 2px;
}
.rightModel img{
  width: 100%;
  height: 112px;
  border: 1px solid #DDD;
  margin-bottom: 5px;
  padding: 1px;
}
.rightModel img:hover{
   border: 1px solid #FF6651;
}

</style>