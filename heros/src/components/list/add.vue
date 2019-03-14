<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Add Hero</h2>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">英雄名称</label>
                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名称">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">英雄性别</label>
                <div>
                    <input type="radio" name="gender" value="男" />男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="gender" value="女" />女
                </div>
            </div>
            <button type="submit" class="btn btn-success">新增</button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    methods: {
       
    }
}
</script>

<style>

</style>
