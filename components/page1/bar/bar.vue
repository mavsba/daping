<template>
  <div class="pie" :style="{width:'100%',height:'100%'}">
    <div id="bar" :style="{width:'100%',height:'100%'}"></div>
  </div>
</template>

<script>
   export default {
    name:'bar',
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
        this.barChart = this.$echarts.init(document.getElementById('bar'))
        this.option = {
            title : {
             text: '新井出产统计',
              textStyle:{
                color:'#fff'
              },
              top:15,
              x:'center' 
            },
            toolbox: {
              feature: {
                saveAsImage:{},
                magicType: {
                    type: ['line', 'bar']
                }, 
              },
              right:20,
              top:10,
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {  
                show: true,
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
            },
            yAxis: {
                show:false,
                type: 'value',
                axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
              } 
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                itemStyle:{
                    normal:{
                        color:'#E08F24'
                    }
                },
            }]
        };

        this.barChart.setOption(this.option)
      },
    },
    mounted(){
      this.pieCharts()
      window.addEventListener("resize", ()=>{
        this.barChart.resize()
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