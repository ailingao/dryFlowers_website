<template>
  <div class="yn_pagination clearfix">
    <ul>
      <!-- <li>上一页</li> -->
      <li class="" v-for="(item,index) in 4" :key="index">{{index+1}}</li>
      <li>下一页</li>
    </ul>
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
.yn_pagination{
  margin: 20px 0;
}
.yn_pagination ul{
  margin: 0;
  overflow: hidden;
  padding: 0;
  display: inline-block;
}
.yn_pagination li{
  font-size: 14px;
  color: #666;
  background: #eee;
  float: left;
  list-style: none;
  height: 35px;
  line-height: 35px;
  margin: 5px 5px;
  padding: 0 13px;
  border-radius: 2px;
  cursor: pointer;
}
.yn_pagination li:hover{
  background: #ff6651!important;
  color: #fff!important;
}
.yn_paginationAct{
  background: #ff6651!important;
  color: #fff!important;
}
</style>