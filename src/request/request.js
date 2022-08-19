import axios from "axios";

//配置
const axiosOption = {
  baseURL: '/api',
  // baseUrl: 'http://mockjs.xiaoyaoji.cn/mock/1kSQB8SHnDV',
  timeout: 5000
}


const instance = axios.create(axiosOption)

// 请求拦截器
instance.interceptors.request.use(function (Config) {
  return Config
}, function (Error) {
  return Promise.reject(Error)
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
  return response.data
},function (error) {
  return Promise.reject(error)
})

export default instance