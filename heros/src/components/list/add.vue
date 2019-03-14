<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Add Hero</h2>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">英雄名称</label>
                <input type="text" class="form-control" v-model="obj.name" id="exampleInputEmail1" placeholder="请输入英雄名称">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">英雄性别</label>
                <div>
                    <input type="radio" v-model="obj.gender" name="gender" value="男" />男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" v-model="obj.gender" name="gender" value="女" />女
                </div>
            </div>
            <button type="submit" class="btn btn-success" @click="add()">新增</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    data() {
        return {
            obj: {
                name: '',
                gender: '男'
            }
        }
    },
    methods: {
        add() {
            this.$http.post('/heroes', this.obj)
            .then(data => {
                var { status, data } = data
                if(status === 201) {
                    alert('添加成功!')
                    this.obj.name = '',
                    this.obj.gender = '男'
                }
            })
        }
    }
}
</script>

<style>

</style>
