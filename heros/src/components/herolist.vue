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
                    <tr v-for="item in list" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.gender }}</td>
                        <td>
                            <router-link :to="'/edit/' + item.id">修改</router-link>
                            <a href="#" @click.prevent="del(item.id)">删除</a>
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
        getList() {
            this.$http.get('/heroes')
            .then(data => {
                var { status, data } = data
                if(status === 200) {
                    this.list = data
                }
            })
        },
        del(id) {
            this.$http.delete(`/heroes/${id}`)
            .then(data => {
                var {status} = data
                if(status === 200) {
                    console.log('ok')
                }
                this.getList()
            })
        }
    },
    mounted(){
        this.getList()
    }
}
</script>

<style>

</style>
