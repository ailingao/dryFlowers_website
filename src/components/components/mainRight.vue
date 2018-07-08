<template>
<div class="mainRight">
   <div class="yn_topTips">
    <span> 微信公众号：DIY手工制作小站 ，欢迎关注！</span>
  </div>
  <div class="row rightModel">
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
.rightModel img{
  border: 1px solid #DDD;
  margin-left: 4px;
  margin-bottom: 5px;
}
.mainRight{

}
</style>
