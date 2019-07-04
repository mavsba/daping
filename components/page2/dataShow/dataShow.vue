<template>
  <div class="dataShow">
    <div class="title">{{title}}</div>
    <div class="content">{{content}}</div>
  </div>
</template>

<script>
  export default {
    name : 'dataShow',
    props:{
      title:{
        type: String,
        default: '订单量'
      },
      content:{
        type: String,
        default: '1994万'
      }
    }
    
  }
</script>

<style lang="scss" scoped>
 .dataShow{
    background: url('../../../assets/image/page2Img/02销量边框.png') no-repeat;
    background-size:100% 100%;
    height: 50%;
    text-align: center;
    .title{
      color: #fff;
      line-height: 3;
    }
    .content{
      font-size: 30px;
      color: skyblue
    }
 }
</style>