<template>
  <div class="pie" :style="{width:'100%',height:'100%'}">
    <div :id="id" :style="{width:'100%',height:'100%'}"></div>
  </div>
</template>

<script>
   export default {
    name:'bar2',
    props:{
      id:{
        default: 'bar2'
      },
      title: {
        default : `各工序出产`
      },
      xdata: {
        type: Array,
        default:()=>['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      sdata: {
        type: Array,
        default:()=>[10, 52, 45, 34, 30, 90]
      },
      barWidth:{
        type: String,
        default: '40%'
      }
    },
    data(){
      return{

      }
    },
    methods:{
        pieCharts(){
        this.bar2Chart = this.$echarts.init(document.getElementById(this.id))
        this.option = {
            title: {
                  text: '世界人口总量',
                  textStyle:{
                    color:'#fff',
                  },
                  top:5,
                  left:10
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['直接访问', '联盟广告','视频广告',],
                align: 'right',
                right: 10,
                top:5,
                textStyle: {
                    color: "#fff"
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis:  {
                type: 'category',
                data: ['周一','周二','周三','周四','周五','周六','周日'],
                axisLine : {
                    lineStyle:{
                    color:'#4052A2'
                    }
                },
              axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick :{show: false},
                
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 30,
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
              
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    // label: {
                    //     normal: {
                    //         show: true,
                    //         position: 'insideRight'
                    //     }
                    // },
                    data: [150, 212, 0, 154, 190, 330, 410]
                },
            ]
        };
         this.bar2Chart.setOption(this.option)
      },
    },
    mounted(){
      this.pieCharts()
      window.addEventListener("resize", ()=>{
        this.bar2Chart.resize()
      });
    }
  }

</script>

<style lang="scss" scoped>
.pie{
  width: 100%;
  background: url('../../../assets/image/page2Img/02其他图边框.png') no-repeat;
  background-size:100% 100%;
  .main{
    width: 100%;
  }
}
</style>