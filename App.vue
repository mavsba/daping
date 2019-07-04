<template>
  <div id="app">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#1056A6"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" @click="$router.push('/page1')">page1</el-menu-item>
        <el-menu-item index="2" @click="$router.push('/page2')">page2</el-menu-item>
        <el-menu-item index="3" @click="$router.push('/page3')">page3</el-menu-item>
        <el-menu-item index="4" @click="$router.push('/page4')">page4</el-menu-item>
        <el-menu-item index="5" @click="$router.push('/page5')">page5</el-menu-item>
        <el-menu-item index="6" @click="$router.push('/page6')">page6</el-menu-item>
        <el-menu-item index="7" @click="$router.push('/page7')">page7</el-menu-item>
        <button @click="quanping">全屏切换</button>
      </el-menu>
        <router-view class="page"/>
  </div>
</template>

<script>

import screenfull from 'screenfull'
export default {
    name: 'app',
    data () {
      return{
      }
    },
    methods:{
      quanping(){
        if(!screenfull.enabled){
          return false
        }
          screenfull.toggle()
      }
    }
} 
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column 
}
.el-menu{
  border:0px !important
}
.el-menu-demo{
  height: 60px;
}
.page{
  flex: 1;
}




</style>
