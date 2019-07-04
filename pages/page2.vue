<template>
    <div class="page2">
        <header class="title"></header>
        <div class="page2_content">
            <el-row  :style="{height:'24%'}" >
                <el-col :span="3"  class="h100"><DataShow class="mb_5"/><DataShow/></el-col>
                <el-col :span="10" class="h100"><Bar/></el-col>
                <el-col :span="11" class="h100"><Bar :title= "title" :xdata = "xdata" :sdata = "sdata" :barWidth = "barWidth" :id = "id"/></el-col>
            </el-row>
            <el-row  :style="{height:'24%'}" >
                <el-col :span="3"  class="h100"><DataShow class="mb_5"/><DataShow/></el-col>
                <el-col :span="10" class="h100"><LineChart/></el-col>
                <el-col :span="11" class="h100"><Bar :title= "title" :xdata = "xdata" :sdata = "sdata" :barWidth = "barWidth" :id = "id1"/></el-col>
            </el-row>
            <el-row  :style="{height:'24%'}" >
                <el-col :span="3"  class="h100"><DataShow class="mb_5"/><DataShow/></el-col>
                <el-col :span="10" class="h100"><Line1Chart/></el-col>
                <el-col :span="11" class="h100"><Bar1/></el-col>
            </el-row>
            <el-row  :style="{height:'23%'}" >
                <el-col :span="3"  class="h100" ><DataShow class="mb_5"/><DataShow/></el-col>
                <el-col :span="21" class="h100"> <Bar2/></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import DataShow from '../components/page2/dataShow/dataShow' ;
    import Bar from '../components/page2/bar/bar';
    import LineChart from '../components/page2/line/line';
    import Line1Chart from '../components/page2/line1/line1';
    import Bar1 from '../components/page2/bar1/bar1';
    import Bar2 from '../components/page2/bar2/bar2';
    export default {
        name : 'dataShow',
        data(){
            return{
                title:'dsadasd',
                xdata:[1,2,3,4,5],
                sdata:[1,2,3,4,5],
                barWidth:'10%',
                id : 'bar9',
                id1 :'bar8',
            }
        },
        components:{
            DataShow,
            Bar,
            LineChart,
            Line1Chart,
            Bar1,
            Bar2
           
        }
        
    }
</script>

<style lang="scss" scoped>
    .h100{
        height: 100%;
    }
    .page2{
        background: url('../assets/image/page2Img/02背景.png'); 
        background-size: 100% 100%;
        padding: 0 20px;
        box-sizing: border-box;
        height: 100%;
        display: flex;
        flex-direction: column;
        .title{
            background: url('../assets/image/page2Img/标题有字.png'); 
            background-size: 100% 100%;
            height: 41px;
            width: 100%;   
            margin: 10px 0;
        }
        .page2_content{
            flex: 1;
            .el-row {
                margin-bottom: 10px;
                .el-col{
                    padding: 5px;
                    box-sizing: border-box;
                }
                .mb_5{
                    margin-bottom: 5px
                }
            }
        }
    }
</style>