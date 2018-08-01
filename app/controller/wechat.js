const Controller   = require('egg').Controller;
const ToolService  = require('../base/tools');
const Tool         = new ToolService();

class WechatController extends Controller {
  async customService(){
    this.ctx.body = await this.ctx.service.wechat.customService();
  }

  async signature(){
    const params  = {
      msg_signature : this.ctx.queries.msg_signature,
      timestamp     : this.ctx.queries.timestamp,
      nonce         : this.ctx.queries.nonce,
      echostr       : this.ctx.queries.echostr,
    };
    const cmdStr  = "python /home/api/extends/wechatCypt/crypt.py " + params.msg_signature + " " + params.timestamp + " " + params.nonce + " " + params.echostr ;
    let result    = await Tool.exescript(cmdStr);
    this.ctx.body = result.stdout;
  }
}

module.exports = WechatController;