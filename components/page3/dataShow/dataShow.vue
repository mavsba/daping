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
        default: '计划完成量'
      },
      content:{
        type: String,
        default: '1994'
      }
    }
  }
</script>

<style lang="scss" scoped>
 .dataShow{
    border: 1px solid skyblue;
    border-radius: 5px;
    height: 100%;
    text-align: center;
    margin-right: 5px;
    .title{
      color: #fff;
      line-height: 3;
      height: 12%;
    }
    .content{
      font-size: 30px;
      color: skyblue;
      height: 88%;
      
      display: flex;
      justify-content: center;
      align-items: center;
    }
 }
</style>