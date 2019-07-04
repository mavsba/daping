<template>
    <div class="Panel">
        <canvas :id="id" :style="{width:'100%',height:'100%', transform: 'scale(.5)'}" ></canvas>
      <span class="content">{{content}}</span>
    </div>
</template>

<script>

  export default {
    name:'instrumentPanel',
    props:{
      color:{
        type:String,
        default:'#03A9F4'
      },
      content:{
        type:String,
        default:'9999'
      },
      id:{
        type:String
      }
    },
    data(){
      return{

      }
    },
    methods:{
      instrumentPanel(){
        var cvs = document.querySelector(`#${this.id}`);
        var ctx = cvs.getContext('2d');
        ctx.beginPath();
        ctx.arc(150,90,80,0,Math.PI,1);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 4;
        ctx.stroke();
       
      }
    },
    mounted(){
      this.instrumentPanel()
    }
  }
</script>

<style lang="scss" scoped>
  .Panel{
    background: url('../../../assets/image/page1Img/边框.png') no-repeat;
    background-size: 100% 100% ; 
    position: relative;
    width: 100%;
    height: 100%;
    .round{
      border: 5px solid #fff;
    }
    .content{
      width: 50%;
      height: 50%;
      text-align: center;
      line-height: 100%; 
      color:#03A9F4;
      font-size: 30px;
      font-weight: 700;
      position: absolute;
      left: 0;
      top: 50%;
      right: 0;
      bottom: 0;
      margin: auto
    }
    .canvas-content{
      
    }
  }
</style>