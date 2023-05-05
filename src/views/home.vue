<template>
    <div class="home">
        <topNav></topNav>
        <swipe></swipe>
        <iconList></iconList>
        <musicList></musicList>
    </div>
</template>
  
<script setup lang="ts">
import topNav from '../components/home/topNav.vue'
import swipe from '../components/home/swipe.vue'
import iconList from '../components/home/iconList.vue'
import musicList from '../components/home/musicList.vue'
</script>
  
<style lang="scss" scoped>
.home {
    padding:.2rem
}
</style>