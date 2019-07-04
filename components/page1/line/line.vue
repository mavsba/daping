<template>
  <div class="pie" :style="{width:'100%',height:'100%'}">
    <div id="line" class="main" :style="{width:'100%',height:'100%'}"></div>
  </div>
</template>

<script>
import { setInterval } from 'timers';
   export default {
    name:'line',
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
        this.lineChart = this.$echarts.init(document.getElementById('line'))
        this.option = {
            title: {
                text: '堆叠区域图',
                textStyle:{
                color:'#fff',
              },
                top:15,
                left:10
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
                 textStyle:{
                 color:'#fff',
                },
                top:20,
                left:120
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                right:20,
                top:10,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {   
                    splitLine:{show: false},
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis : [
                {   
                    splitLine:{show: false},
                    type : 'value',
                    axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                }
            ],
            series : [
                {
                    name:'邮件营销',
                    type:'line',
                    symbol:'none',
                    stack: '总量',
                    areaStyle: {},
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    symbol:'none',
                    stack: '总量',
                    areaStyle: {},
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    symbol:'none',
                    stack: '总量',
                    areaStyle: {},
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    symbol:'none',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    symbol:'none',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        this.lineChart.setOption(this.option)
      },
    },
    mounted(){
      this.pieCharts()
      window.addEventListener("resize",()=>{
           this.lineChart.resize()
      });

      setInterval(()=>{
          
      },5000)
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