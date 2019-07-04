<template>
  <div class="pie" :style="{width:'100%',height:'100%'}">
    <div :id="id" :style="{width:'100%',height:'100%'}"></div>
  </div>
</template>

<script>
   export default {
    name:'line1',
    props:{
      id:{
        default: 'line1'
      },
      title: {
        default : `各工序出产`
      },
      xdata: {
        type: Array,
        default:()=>[1,2,3,4,5,6,7]
      },
      sdata: {
        type: Array,
        default:()=>[10, 52, 200, 334, 390, 330, 220]
      },
    },
    data(){
      return{

      }
    },
    methods:{
        pieCharts(){
        this.lineChart = this.$echarts.init(document.getElementById(this.id))
       this.option = {
          title: {
              text: this.title,
              textStyle:{
                color:'#fff',
              },
              top:5,
              left:10
          },
          tooltip: {
              trigger: 'axis'
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: this.xdata,
              axisLine: {
                show: true,
                lineStyle: {
                    color: "#FFF",
                    width: 1,
                    type: "solid"
                }
            },
          },
          yAxis: {
              show: false,
              type: 'value'
              
          },
          series:  {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  data:this.sdata,
                  lineStyle:{ 
                    color:'#0D8E62' //改变折线颜色
                  },
                  itemStyle :{
                    color: '#0D8E62'
                  },
                  areaStyle: {
                    color:'#19333F'
                  }
              }
      };
         this.lineChart.setOption(this.option)
      },
    },
    mounted(){
      this.pieCharts()
      window.addEventListener("resize", ()=>{
        this.lineChart.resize()
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