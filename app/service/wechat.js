'use strict';
const Service     = require('egg').Service;
const Wechat      = require('../base/wechat');
const ToolService = require('../base/tools');
const Tool        = new ToolService();

class WechatService extends Service {
  constructor(){}

  async signature(){

  }
}

module.exports = WechatService;