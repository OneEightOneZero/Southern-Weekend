<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline mt15">
        <el-form-item>
            <el-input v-model="formInline.name" ref="search" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="formInline.phone" ref="search1" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">筛选</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data(){
        return{
            query:'',
            query1:''
        }
    },
    methods:{
        onSubmit() {
            this.query = this.$refs.search.value.trim();
            this.query1 = this.$refs.search1.value.trim();
        },
        queryDate (list) {
            if (this.query === '' && this.query1 === '') {
                return list
            } else if (this.query !== '' && this.query1 === '') {
                return list.filter(item => {
                    if (item.name.indexOf(this.query) !== -1) {
                        return item
                    }
                })
            } else if (this.query === '' && this.query1 !== '') {
                return list.filter(item => {
                    if (item.mobile.indexOf(this.query1) !== -1) {
                        return item
                    }
                })
            } else if (this.query !== '' && this.query1 !== '') {
                return list.filter(item => {
                    if (item.name.indexOf(this.query) !== -1 && item.mobile.indexOf(this.query1) !== -1) {
                        return item
                    }
                })
            }
        }
    }
}
</script>
<style scoped>

</style>

