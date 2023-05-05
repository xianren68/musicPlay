<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import {onMounted,reactive} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {getDetail} from '../api'
import {PrivilegeInt} from '../type/detail'
// 当前路由
const route = useRoute()
// 路由
// const router = useRouter()
// 详情数据
const playlist = reactive({})
const privileges:Array<PrivilegeInt> = reactive([])
// 获取详情页数据
const getDetailData = async ()=>{
    // 获取路由参数
    let id:any = route.query.id
    let {data} = await getDetail(id)
    if(data.code==200){
        Object.assign(playlist,data.playlist)
        Object.assign(privileges,data.privileges)
    }
    
}
onMounted(()=>{
    getDetailData()
})
</script>

<style lang="scss" scoped>

</style>