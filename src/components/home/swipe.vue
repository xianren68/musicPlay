<template>
    <div class="swipe">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="img in images.arr" :key="img.bannerId">
              <img :src="img.pic" />
            </van-swipe-item>
          </van-swipe>
    </div>
</template>

<script setup lang="ts">
import {reactive,onMounted} from 'vue'
import { getBanner } from '../../api'
    const images:{arr:Array<any>} = reactive({
        arr:[]
    })
    const getimgList = async ()=>{
        let {data} = await getBanner(2)
        if (data.code == 200){
            images.arr = data.banners
        }
        
    }
    // 获取轮播图列表
    onMounted(()=>{
        getimgList()
    })
</script>

<style lang="scss" scoped>
.swipe {
    .van-swipe {
        height: 3rem;
        img {
            height: 100%;
            width: 100%;
        }
    }
}
</style>