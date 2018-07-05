<template>
<div class="yn_leftNav">
  <div class="yn_menu">
    <span class="sitenav-on"><i class="glyphicon glyphicon-align-justify"></i></span>
  </div>
  <div class="yn_list">
    <ul>
      <li>
        <a class="active" href="#">首页</a>
      </li>
      <li v-for="(item,index) in 6" :key="index">
        <a href="#" class="yn_listTitle">测试标题</a>
        <div class="yn_listItem">
          <a href="#">测试列表</a>
        </div>
      </li>
    </ul>
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
<style lang="less">
.yn_leftNav{
  padding: 15px;
}
.yn_menu{
  display: block;
  width: 100%;
  text-align: left;
}
.yn_list{
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.yn_list ul{
  padding: 0;
}
.yn_list li{
  list-style: none;
  text-align: left;
}
.yn_list a{
  text-decoration: none;
  color: #555;
  font-weight: bold;
  display: block;
}
.yn_listTitle{
  font-size: 14px;
  padding: 12px 0;
  line-height: 1;
}
.yn_listItem a{
  font-size: 12px;
  padding: 12px 15px 12px 30px;
}
.active{
  background: #FF6651;
  color: #fff;
}
</style>
