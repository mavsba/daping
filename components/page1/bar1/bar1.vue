<template>
  <div class="pie" :style="{width:'100%',height:'100%'}">
    <div id="bar1" :style="{width:'100%',height:'100%'}"></div>
  </div>
</template>

<script>
   export default {
    name:'bar1',
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
        this.bar1Chart = this.$echarts.init(document.getElementById('bar1'))
        this.option = {
          title : {
              text: '新井出产统计',
              textStyle:{
                color:'#fff'
              },
              top:15,
              left:10
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#283b56'
                  }
              }
          },
          legend: {
              top:20,
              textStyle:{
                color:'#fff',
              },
              data:['最新成交价', '预购队列']
          },
          toolbox: {
              show: true,
              feature: {
                  saveAsImage: {}
              },
              right:20,
              top:10,
          },
          dataZoom: {
              show: false,
              start: 0,
              end: 100
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: true,
                  axisLabel : {
                      formatter: '{value}',
                      textStyle: {
                          color: '#fff'
                      },
                  },
                  axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        //坐标线的宽度
                    }
                  },
                  data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
              },
              {
                  show:false,           //隐藏了上方
                  type: 'category',
                  boundaryGap: true,
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              }
          ],
          yAxis: [
                  {   
                    show:false,
                    type: 'value',
                    scale: true,
                    name: '价格',
                    max: 30,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                  },
                  {   
                    show:false,   
                    type: 'value',
                    scale: true,
                    name: '预购量',
                    max: 1200,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                  }
          ],
          series: [
              {
                  name:'预购队列',
                  type:'bar',
                  xAxisIndex: 1,
                  yAxisIndex: 1,
                  barWidth : 30,
                  itemStyle:{
                          normal:{
                              color:'#03A9F4'
                          }
                      },
                  data:[120,11,125,513,224,615,126]
              },
              {
                  name:'最新成交价',
                  type:'line',
                  itemStyle:{
                          normal:{
                              color:'#09D854'
                          }
                      },
                  data: [10,11,12,13,14,15,16]
              }
          ]
        };


         this.bar1Chart.setOption(this.option)
      },
    },
    mounted(){
      this.pieCharts()
      window.addEventListener("resize", ()=>{
        this.bar1Chart.resize()
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