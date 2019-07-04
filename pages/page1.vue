<template>
    <div class="page1">
        <el-row :gutter="20" class="h15">
            <el-col :span="4" class="h100"><BlueGrid/></el-col>
            <el-col :span="4" class="h100"><BlueGrid/></el-col>
            <el-col :span="4" class="h100"><BlueGrid/></el-col>
            <el-col :span="4" class="h100"><BlueGrid/></el-col>
            <el-col :span="4" class="h100"><BlueGrid/></el-col>
            <el-col :span="4" class="h100"><BlueGrid/></el-col>
        </el-row>
        <el-row :gutter="20" class="h25">
            <el-col :span="8" class="h100"><InstrumentPanel :color = "color"  :id = "cs"/></el-col>
            <el-col :span="8" class="h100"><InstrumentPanel :content="999"  :id = "cs1"/></el-col>
            <el-col :span="8" class="h100"><InstrumentPanel :content="999"  :id = "cs2"/></el-col>
        </el-row>
        <el-row :gutter="20" class="h30">
            <el-col :span="8" class="h100"><Pie/></el-col>
            <el-col :span="8" class="h100"><LineChart/></el-col>
            <el-col :span="8" class="h100"><Statistical/></el-col>
        </el-row>
        <el-row :gutter="20" class="h30">
            <el-col :span="8" class="h100"><Bar/></el-col>
            <el-col :span="8" class="h100"><Bar1/></el-col>
            <el-col :span="8" class="h100"><Bar2/></el-col>
        </el-row>    
    </div>
</template>

<script>
    import BlueGrid from '../components/page1/blueGrid/blueGrid'
    import InstrumentPanel from '../components/page1/instrumentPanel/instrumentPanel'
    import Pie from "../components/page1/pie/pie"
    import LineChart from "../components/page1/line/line"
    import Statistical from "../components/page1/statistical/statistical"
    import Bar from "../components/page1/bar/bar"
    import Bar1 from "../components/page1/bar1/bar1"
    import Bar2 from "../components/page1/bar2/bar2"
    export default {
        name: 'page1',
        data(){
            return{
                color:'red',
                cs:'cs',
                cs1:'cs1',
                cs2:'cs2',
            }
        },
        components:{
            BlueGrid,
            Pie,
            LineChart,
            Statistical,
            Bar,
            Bar1,
            Bar2,
            InstrumentPanel
        }
    }
</script>

<style lang="scss" scoped>
    .h100{
        height: 100%;
    }
    .h10{
        height: 13%
    }
    .h25{
        height: 25%
    }
    .h30{
        height: 26%
    }
    .page1{
        background: url('../../src/assets/image/page1Img/背景.jpg'); 
        background-size: 100% 100%;
        padding: 0 20px;
        box-sizing: border-box;
        height: 100%;
    }
    .el-row{
        margin-top: 20px !important;
    
    }
  
</style>