const Controller = require('egg').Controller;

class WechatController extends Controller {
  async customService(){
    this.ctx.body = await this.ctx.service.wechat.customService();
  }

  async signature(){
    const params  = {
      msg_signature : this.ctx.request.body.msg_signature,
      timestamp     : this.ctx.request.body.timestamp,
      nonce         : this.ctx.request.body.nonce,
      echostr       : this.ctx.request.body.echostr,
    };
    this.ctx.body = params;
  }
}

module.exports = WechatController;