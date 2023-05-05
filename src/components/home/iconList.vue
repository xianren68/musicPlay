<template>
    <div class="nav-mid">
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-nav-1"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sirenFM"></use>
            </svg>
            <span>私人FM</span>
        </div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.nav-mid {
    margin-top:.4rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    div {
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

}
.icon {
    height: 1rem;
    width: 1rem;
}
</style>