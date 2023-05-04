import req from './req'
// 轮播图
export const getBanner = (type:number)=> req.get(`/banner?type=${type}`)