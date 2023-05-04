function remSize(){
    // 获取到页面大小
    let width = window.innerWidth || document.documentElement.clientWidth
    if(width >= 750){
        width = 750
    }
    if(width <= 320){
        width = 320
    }
    // 设置fontSize 
    // 750 1rem->100px 375 1rem->50px
    document.documentElement.style.fontSize = (width/7.5)+'px'
    // 设置字体大小
    document.querySelector('body').style.fontSize = 0.3+'rem'
}
remSize()
// 绑定事件
window.onresize = function(){
    remSize()
}