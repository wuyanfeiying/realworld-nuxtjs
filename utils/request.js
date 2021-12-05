/*
 * @Date: 2021-12-05 15:59:15
 * @desc: 基于 axios 封装的请求模块
 */
import axios from "axios";

const request = axios.create({
  baseURL: 'https://api.realworld.io'
})

// 请求拦截器

// 响应拦截器

export default request