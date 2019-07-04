<template>
  <div>
    <div class="blueGrid"> 
      <div class="blueGrid_content">
        <header>{{title}}</header>
        <article>{{cotent}}</article>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'blueGrid',
    data(){
      return{
        unit:'斤'
      }
    },
    props:{
      cotent:{
        default :'82.28万'
      },
      title:{
        default : `上半年产油量  (吨)`
      },
    }
  }
</script>

<style lang="scss" scoped>
  .blueGrid{
    margin-right: 5px;
    background: url('../../../assets/image/page1Img/蓝格.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 10px 0 0 0 ; 
    box-sizing: border-box;
    .blueGrid_content{
      article{
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      margin:20px 0;
    }
    header{
      margin-top: 5px;
      color: #fff
    }
    }
  }
</style>