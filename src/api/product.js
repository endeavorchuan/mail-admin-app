/**
 * @name: product
 * @author: chuanchuan
 * @date: 2022-03-25 13:11
 * @description：product
 * @update: 2022-03-25 13:11
 */
import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/products/all', { params });
  },
};
