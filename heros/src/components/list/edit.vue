<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Eidt Hero</h2>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">英雄名称</label>
                <input type="text" v-model="obj.name" class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名称">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">英雄性别</label>
                <div>
                    {{$route.params.id}}
                    <input type="radio" v-model="obj.gender" name="gender" value="男" />男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" v-model="obj.gender" name="gender" value="女" />女
                </div>
            </div>
            <button type="submit" @click.prevent="edit(obj)" class="btn btn-success">修改</button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            obj: {},
            id:''
        }
    },
    methods: {
        getId() {
            this.id = this.$route.params.id
            this.$http.get(`/heroes/${this.id}`)
            .then(data => {
                var { status,data } = data
                if(status === 200) {
                    this.obj = data
                }
            })
        },
        edit(obj) {
            this.$http.put(`/heroes/${this.id}`, this.obj)
            .then(data => {
                var { status,data } = data
                if(status === 200) {
                    window.location = '/herolist'
                }
            })
        }
    },
    mounted() {
        this.getId()
    }
}
</script>

<style>

</style>
