<template>
    <div class="Playlist">
        <div class="classTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" :show-indicators="false">
                <van-swipe-item v-for="item in recommendList" :key="item.id" @click="goDetail(item.id)">
                    <div class="cover">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div class="playcount">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofang"></use>
                        </svg>
                        <span>{{playCount(item.playCount)}}</span>
                    </div>
                    <span class="text">
                        {{item.name}}
                    </span>
                </van-swipe-item>
              </van-swipe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getRecommend } from '../../api'
import {onMounted,reactive} from 'vue'
import {RecommendInt} from '../../type/home'
import {useRouter} from 'vue-router'
// 路由
const router = useRouter()
// 推荐歌单
const recommendList:Array<RecommendInt>= reactive([]) 
// 获取推荐歌单数据
const reqRecommendList =  async ()=>{
    let {data} =  await getRecommend()
    if(data.code == 200){
        Object.assign(recommendList,data.result)
    }
}
// 播放量显示函数
const playCount = (count:number):string=>{
    let res:string = ''
    if (count>=100000000){
        res = (count/100000000).toFixed(1) + '亿'
    }else if(count>=10000){
        res = (count/10000).toFixed(1) + '万'
    }
    return res
}
// 路由跳转到歌单详情页
const goDetail = (id:number)=>{
    router.push(`/detail/?id=${id}`)
}
// 生命周期钩子获取数据
onMounted(()=>{
    reqRecommendList()
})
</script>

<style lang="scss" scoped>
    .Playlist {
        margin-top: .8rem;
        .classTop {
            height: .6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title {
                font-size: .4rem;
                font-weight: 900;
            }
            .more {
                height: 80%;
                width: 1.4rem;
                justify-content: center;
                display: flex;
                align-items: center;
                border:solid 1px #ccc;
                border-radius: 15%;
                font-size: .3rem;
            }
        }
        .musicContent {
            margin-top: .5rem;
            .van-swipe{
                height: 100%;
                .van-swipe-item {
                    height: 100%;
                    padding: .1rem;
                    position: relative;
                    .cover{
                        width :100%;
                        height: 80%;
                        margin-bottom: .1rem;
                        border-radius: 15px;
                        overflow: hidden;
                        img {
                            width :100%;
                            height: 100%;
                        }
                    }
                    .playcount {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        color:#fff;
                        top:.2rem;
                        right: .2rem;
                        .icon {
                            fill:#fff;
                        }
                    }
                    .text {
                        font-size: .25rem;
                    }
                }
            }

        }
    }
</style>