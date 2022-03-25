/**
 * @name: category
 * @author: chuanchuan
 * @date: 2022-03-25 13:12
 * @description：category
 * @update: 2022-03-25 13:12
 */
// 所有类目的接口

import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/category/all', { params });
  },
};
