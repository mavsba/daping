<template>
    <div class="page3">
        <header id="header" class="title h6">生产监控看板</header>
        <el-row  class= "h22">
                <el-col :span="3"  class="h100"><DataShow/></el-col>
                <el-col :span="3"  class="h100"><DataShow/></el-col>
                <el-col :span="3"  class="h100"><DataShow/></el-col>
                <el-col :span="3"  class="h100"><DataShow/></el-col>
                <el-col :span="3"  class="h100"><DataShow/></el-col>
                <el-col :span="3"  class="h100"><DataShow/></el-col>
                <el-col :span="3"  class="h100"><DataShow/></el-col>
                <el-col :span="3"  class="h100"><DataShow/></el-col>
        </el-row>
        
                <el-table
                class="h65"
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                    <marquee direction="up" behavior="alternate">
                            <el-table-column
                                prop="date"
                                label="日期"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="姓名"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="地址">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="地址">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="地址">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="地址">
                            </el-table-column>
                    </marquee>
            </el-table>
           
      
    </div>
</template>

<script>
    import DataShow from '../components/page3/dataShow/dataShow'

    export default {
        name:'page3',
        data () {
            return{
                tableData: [
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, 
                    {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, 
                    {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }
                ]
            }
        },
        methods: {
             tableRowClassName({rowIndex}) {
                if (rowIndex === 1) {
                return 'warning-row';
                } else if (rowIndex === 3) {
                return 'success-row';
                }
                return '1111';
            }
        },
        mounted () {
            let marquee = this.$("<marquee>")
            let table = this.$('.el-table__body')
            let tbody = this.$('tbody')
            
         
            marquee.append(tbody)  
            table.append(marquee)
          
            marquee.attr("direction","up")
            marquee.attr("behavior","alternate")            
            marquee.attr("height","532px")  
            table.attr("width","100%")
            
            let tWidth = table.css('width')
              marquee.attr("width",tWidth)
              tbody.attr("width",tWidth)

              
              
        },
        components:{
          DataShow
        }
    }
</script>

<style lang="scss" scoped>
    .h6{
        height: 6%;
    }
    .h22{
        height: 22%;
    }
    .h65{
        height: 65%;
        margin-top: 20px
    }
    .h100{
        height: 100%;
    }
    .page3{
        background: url('../assets/image/page2Img/02背景.png'); 
        background-size: 100% 100%;
        padding:  15px;
        box-sizing: border-box;
        height: 100%;
        .title{
            color: #2196F3;
            font-size: 22px;
            
        }
        .el-table .warning-row {
            background: oldlace;
        }
        
        .el-table .success-row {
            background: #f0f9eb;
        }
        .el-table--enable-row-hover .el-table__body tr:hover>td {
            background-color:#00CAFF; 
        }
}
    
</style>