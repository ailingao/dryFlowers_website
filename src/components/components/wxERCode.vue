<template>
<div class="wxERCode">
   <img src="../../assets/wx.png" alt="">
   <div class="ewm">
       <p>官方微信公众号： 云南干花网</p>
       <img src="../../assets/logo.png" alt="">

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
.ewm{
    display: none;
    width: 73%;
    margin: 0 auto;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 5px #ddd;
     border-radius: 5px;
}
.ewm p{
    padding: 8px 14px;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-radius: 5px 5px 0 0;
}
.ewm img{
    padding: 14px;
}
.wxERCode{
   margin-top: 30px;
}
.wxERCode img{
   width: 100%
   
}
.wxERCode:hover{
    .ewm{
    display: block;
    }
}
</style>
