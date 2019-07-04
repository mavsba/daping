<template>
  <div class="pie" :style="{width:'100%',height:'100%'}">
    <div :id="id" :style="{width:'100%',height:'100%'}"></div>
  </div>
</template>

<script>
   export default {
    name:'bar',
    props:{
      id:{
        default: 'bar'
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
        default:()=>[10, 52, 200, 334, 390, 330, 220]
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
        this.barChart = this.$echarts.init(document.getElementById(this.id))
        this.option = {
            color: ['#3398DB'],
            title:{
              text: this.title,
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
            label: {
              show: true, //开启显示
              position: 'top', //在上方显示
              textStyle: { //数值样式
                color: 'black',
                fontSize: 16,
                fontWeight: 600
              }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.xdata,
                    axisTick: {
                        alignWithLabel: true
                    },
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
                    type : 'value',
                    show : false
                } 
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: this.barWidth,
                    data:this.sdata,
                   

                }
            ]
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
  background: url('../../../assets/image/page2Img/02其他图边框.png') no-repeat;
  background-size:100% 100%;
  .main{
    width: 100%;
  }
}
</style>