<template>
  <div class="yn_label clearfix">
    <div class="yn_topTips">
      <div class="yn_label">
        <ul>
          <li v-for="(item,index) in 15" :key="index">标签{{index}}</li>
        </ul>
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
.yn_label ul{
  margin: 0;
  padding: 0 0 8px;
  overflow: hidden;
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
  margin-top: 8px;
}
.yn_label li:hover{
  background: #ff6651;
}
.yn_labelActive{
  background: #ff6651;
}
</style>