/**
 * @name: permission
 * @author: chuanchuan
 * @date: 2022-03-21 15:57
 * @description：permission
 * @update: 2022-03-21 15:57
 */

// 配置每个角色所对应的路由关系

// 存储的是角色对应的权限名称
const roleToRouter = {
  coustomer: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  }, {
    name: 'ProductEdit',
  }],

  admin: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  }, {
    name: 'ProductEdit',
  }, {
    name: 'Category',
  }],
};

/**
 * 过滤掉没有权限的路由
 * @param {String} role
 * @param {Array} routes
 * @returns {*}
 */
export default function getMenuRoute(role, routes) {
  const allowRoutesName = roleToRouter[role].map((item) => item.name);
  const resultRoutes = routes.filter((r) => {
    const obj = r;
    if (allowRoutesName.indexOf(r.name) !== -1) {
      const { children } = obj;
      // eslint-disable-next-line no-param-reassign
      obj.children = children.filter((c) => allowRoutesName.indexOf(c.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRoutes;
}
