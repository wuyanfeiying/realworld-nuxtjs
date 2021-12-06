/*
 * @Date: 2021-12-05 16:37:32
 * @desc: 文章模块
 */
import request from '@/utils/request';

// 获取公共文章列表
export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  });
};