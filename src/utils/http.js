import axios from "axios";
import qs from "qs";
import {getItem} from "./auth";

axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
let http = {
    get: '',
    post: ''
};
http.get = (api, data) => {
    let params = data;
    return new Promise((resolve, reject) => {
        axios.get(api, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
http.post = (api, data) => {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.post(api, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(!config.url.match('login')) {
        axios.headers['Authorization'] = getItem('token');
    }
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default http