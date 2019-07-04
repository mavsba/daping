<template>
  <div class="pie" :style="{width:'100%',height:'100%'}">
    <div :id="id" :style="{width:'100%',height:'100%'}"></div>
  </div>
</template>

<script>
   export default {
    name:'bar1',
    props:{
      id:{
        default: 'bar1'
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
        this.bar1Chart = this.$echarts.init(document.getElementById(this.id))
        this.option = {
              title: {
                  text: '世界人口总量',
                  textStyle:{
                    color:'#fff',
                  },
                  top:5,
                  left:10
              },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow'
                  },
                  formatter: "{a} <br/>{b}: {c}%"
              },
              label: {
                        show: true, //开启显示
                        position: '', //在上方显示
                        textStyle: { //数值样式
                          color: 'black',
                          fontSize: 30,
                          fontWeight: 700
                        },
                        formatter: "{c}%"
                      },
              grid: {
                  left: '2%',
                  right: '4%',
                  bottom: '-5%',
                  containLabel: true
              },
              xAxis: {
                  show: false,
                  type: 'value',
                  max :100
              },
              yAxis: {
                  type: 'category',
                  data: ['巴西','印尼','美国','印度','中国','世界人口(万)'],
                  axisLine : {show: false},
                  axisTick :{show: false},
                  axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
              },
              series:
                  {
                      name: '2011年',
                      type: 'bar',
                      barCategoryGap:'0%',
                      data: this.sdata,
                      itemStyle:{
                          normal:{
                              color:'#01CD79'
                          },
                      },
                      barWidth:20,
                  },
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
  background: url('../../../assets/image/page2Img/02其他图边框.png') no-repeat;
  background-size:100% 100%;
  .main{
    width: 100%;
  }
}
</style>