/**
 * @name: user
 * @author: chuanchuan
 * @date: 2022-03-20 15:42
 * @description：user
 * @update: 2022-03-20 15:42
 */
// 对于用户操作的接口管理

import axios from '@/axios';

export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
};
