'use strict';

const wechat = require('co-wechat');

module.exports = app => {
  class HomeController extends app.Controller {}

  // 因为 Egg 需要用类的形式来组织，而 wechat 是通过 middleware 方法来生成中间件
  HomeController.prototype.wechat = wechat({
    token: 'wYA10XSUEzL1EQmdCyXFd9hzGNsM',
    appid: 'iuSFA11uMgA86sTS2ZiadHxMtQjvpk6BzUSsnSQ9NiY',
    encodingAESKey: 'wweeb673ca4f4dda8c'
  }).middleware(async (message, ctx) => {
    // TODO
    console.log(message);
    ctx.body = "ok"
  });

  return HomeController;
};