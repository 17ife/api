'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521705392823_8554';

  // add your config here
  config.middleware = [];

  config.mysql = {
    // 单数据库信息配置
    client:{
      // host
      host: '140.82.4.24',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'renchao',
      // 数据库名
      database: 'shopping',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  };

  config.security = {
    csrf: {
      enable: false,
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
  };

  return config;
};
