<template>
  <div class="yn_breadcrumb clearfix">
    <div class="yn_topTips">
      <span class="glyphicon glyphicon-hand-right yn_tipsIcon"></span>
      <span class="yn_breadcrumbItem">首页<span style="margin-left:5px;">»</span></span>
      <span class="yn_breadcrumbItem">一级<span style="margin-left:5px;">»</span></span>
      <span class="yn_breadcrumbItem">二级<span style="margin-left:5px;">»</span></span>
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
.yn_breadcrumbItem:hover{
  color: #ff6651;
  cursor: pointer;
}
</style>