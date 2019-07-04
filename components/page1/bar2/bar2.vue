<template>
  <div class="pie" :style="{width:'100%',height:'100%'}">
    <div id="bar2" :style="{width:'100%',height:'100%'}"></div>
  </div>
</template>

<script>
   export default {
    name:'bar2',
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
        this.bar2Chart = this.$echarts.init(document.getElementById('bar2'))
        this.option = {
    
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['接入率', '在线率', '完好率'],
        align: 'right',
        right: 10,
        top:20,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['喀什市',
            '疏附县',
            '疏勒县',
            '英吉沙县',
            '泽普县',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#063374",
            }
        }
    }],
    series: [{
        name: '接入率',
        type: 'bar',
        data: [20, 50, 80, 58, 83],
        barGap: 1, //柱子之间间距
    }, {
        name: '在线率',
        type: 'bar',
        data: [50, 70, 60, 61, 75],
        barGap: 1,
    }, {
        name: '完好率',
        type: 'bar',
        data: [70, 48, 73, 68, 53],
        barGap: 1,
    }]
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
  background: url('../../../assets/image/page1Img/边框.png') no-repeat;
  background-size:100% 100%;
  .main{
    width: 100%;
  }
}
</style>