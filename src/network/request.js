import axios from 'axios'
export function request(config){
  // 1.创建axios实例
  const instancel = axios.create({
    baseURL:"https://api.uomg.com/api",
    timeout:500
  })

  // 2.axios的拦截器
  instancel.interceptors.request.use(config => {
    return config
  },err => {})

  // 相应拦截
  instancel.interceptors.response.use(res => {
    return res.data
  },err =>{
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instancel(config)
}