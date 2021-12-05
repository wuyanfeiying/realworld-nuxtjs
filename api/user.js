/*
 * @Date: 2021-12-05 16:37:32
 * @desc: 登录模块
 */
import request from '@/utils/request';

// 用户登录
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};

// 用户注册
export const register = (data) => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  });
};
