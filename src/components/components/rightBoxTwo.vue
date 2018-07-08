<template>
<div>
     <div class="yn_topTips">
        <span> 热门标签</span>
    </div>
    <div class="rightModel2 clearfix">
        <div class="col-md-4" v-for="(item,index) in 29" :key="index">
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