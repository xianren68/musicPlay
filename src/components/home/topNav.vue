<template>
    <div class="topNav">
        <div class="left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-caidan"></use>
            </svg>
        </div>
        <div class="content">
            <div>我的</div>
            <div class="active">发现</div>
            <div>云村</div>
            <div>视频</div>
        </div>
        <div class="right">
            
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>

</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.topNav {
    display: flex;
    width: 100%;
    height: 8%;
    align-items: center;
    justify-content: space-between;
    .content {
        display: flex;
        width: 60%;
        height: 100%;
        font-size: .36rem;
        justify-content: space-around;
        align-items: center;
    }
}
.active {
    font-weight: 900;
}
</style>