/* eslint-disable */
import axios from 'axios';

const util = {};
// const ajaxurl = location.href.match('uat')?'/bi-uatrepair':'/bi-repair';
util.ajax = axios.create({
  baseURL: '/contest',
  // timeout: 30000
});

util.transParams = (data) => {
  let params = new URLSearchParams();
  for (let item in data) {
    params.append(item, data['' + item + '']);
  }
  return params;
};

util.headersUrlencoded = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
};

util.headersMultipart = {
  headers: { 'Content-Type': 'multipart/form-data' },
};

util.false = {
  headers: { 'Content-Type': 'false' },
};
// 添加请求拦截器
// util.ajax.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });
// 添加响应拦截器
// util.ajax.interceptors.response.use(function (res) {
//   return res
// }, function (error) {
//   // 对响应错误做点什么
//   // return Promise.reject(error);
// });
export default util;
