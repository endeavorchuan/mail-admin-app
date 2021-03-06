/**
 * @name: userCookie
 * @author: chuanchuan
 * @date: 2022-03-21 11:11
 * @description：userCookie
 * @update: 2022-03-21 11:11
 */

import Cookies from 'js-cookie';

// 设置cookie信息
export function setCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}

// 获取用户的cookie信息
export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}

// 删除cookie信息
export function removeUserCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
  return true;
}
