<template>
  <div class="pie" :style="{width:'100%',height:'100%'}">
    <div id="pie" class="main" :style="{width:'100%',height:'100%'}"></div>
  </div>
</template>

<script>

   export default {
    name:'pie',
    props:{
       cotent:{
        default :'11.28万'
      },
      title:{
        default : `产量构成图`
      },
    },
    data(){
      return{

      }
    },
    methods:{
        pieCharts(){
        this.pieChart = this.$echarts.init(document.getElementById('pie'))
        this.option = {
          title : {
             text: this.title,
              textStyle:{
                color:'#fff'
              },
              top:15,
              x:'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              x: 'left',
              left:25,
              top:20,
              textStyle:{
                fontSize:14,
                color:'#fff',
              
              },
              data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          toolbox: {
                feature: {
                    saveAsImage: {}
                },
                right:20,
                top:10,

            },
          series: [
              {
                  name:'访问来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  center:['50%','55%'],
                  avoidLabelOverlap: false,
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          show: true,
                          textStyle: {
                              fontSize: '30',
                              fontWeight: 'bold'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data:[
                      {value:335, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:234, name:'联盟广告'},
                      {value:135, name:'视频广告'},
                      {value:1548, name:'搜索引擎'}
                  ]
              }
          ]
        }
        this.pieChart.setOption(this.option)
      },
    },
    mounted(){
      this.pieCharts()
      window.addEventListener("resize", ()=>{
        this.pieChart.resize()
      });
    }
  }
</script>

<style lang="scss" scoped>
.pie{
  width: 100%;
  background: url('../../../assets/image/page1Img/边框.png') no-repeat;
  background-size:100% 100%;
  .main{
    width: 100%;
  }
}
</style>