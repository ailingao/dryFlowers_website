<template>
<div class="yn_leftNav">
  <div class="yn_menu" @click="menu">
    <span class="sitenav-on"><i class="glyphicon glyphicon-align-justify"></i></span>
  </div>
  <div class="yn_list" :style="height">
    <ul>
      <li>
        <div class="active">
          <a class="yn_listTitle" href="#">测试标题</a>
        </div>
      </li>
      <li v-for="(item,index) in 6" :key="index">
        <!-- <a href="#" class="yn_listTitle">测试标题</a> -->
        <div @click="toOthers($event)" >
          <a class="yn_listTitle" href="#">测试标题</a>
        </div>
        <div @click="toOthers($event)">
          <a class="yn_listItem" href="#">测试列表</a>
        </div>
        <div  @click="toOthers($event)">
          <a class="yn_listItem" href="#">测试列表</a>
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
      height:'',
      actIndex:'0',
    }
  },
  methods:{
    toOthers(e){
      console.log(e.currentTarget.index)
    },
    menu(){
      this.$emit('menuClickTwo','1')
    },
  },

  created(){
    this.height='height:'+(document.documentElement.clientHeight || document.body.clientHeight)+'px'
    console.log(this.height)
  },
  components:{

  }
  
}
</script>
<style lang="less" scoped>
.yn_leftNav{
  position: relative;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 100%;
  width: 80%;
}
.yn_menu{
  display: block;
  width: 80%;
  text-align: left;
  padding: 15px;
  position: fixed;
  right: 100%;
  top: 0;
  z-index: 5;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.yn_list{
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-top: 50px;
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
  padding: 12px 15px;
  line-height: 1;
}
.yn_listItem {
  font-size: 12px;
  padding: 12px 15px 12px 45px;
}
.active a{
  background: #FF6651;
  color: #fff !important;
}
</style>
