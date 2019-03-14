<template>
  <div id="app">
    <!-- 头部组件 -->
    <topbar />
    <!-- 侧边栏组件 -->
    <sidebar />
    <!-- 内容部分 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 导入头部组件
import topbar from './layout/topBar.vue'
// 导入侧边栏组件
import sidebar from './layout/sideBar.vue'
export default {
  name: 'App',
  // 注册为子组件
  components: {
    topbar,
    sidebar  
  }
}
</script>

<style>

</style>
