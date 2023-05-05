import req from './req'
// 轮播图
export const getBanner = (type:number)=> req.get(`/banner?type=${type}`)
// 推荐歌单
export const getRecommend = ()=> req.get('/personalized?limit=10')
// 获取歌单详情
export const getDetail = (id:number)=>req.get(`/playlist/detail/?id=${id}`)