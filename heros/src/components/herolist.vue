<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Hero List</h2>
        <!-- 添加英雄 -->
        <router-link to="/add" class="btn btn-success">Add</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in list" :key="i">
                        <td>id</td>
                        <td>姓名</td>
                        <td>性别</td>
                        <td>
                            <router-link to="/edit/" + item.id>修改</router-link>
                            <a href="#">删除</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// 请求数据
// 引入　axios
// import axios from 'axios'

export default {
    data() {
        return {
            list: []
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
