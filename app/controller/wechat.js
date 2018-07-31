const Controller   = require('egg').Controller;
const ToolService  = require('../base/tools');
const Tool         = new ToolService();

class WechatController extends Controller {
  async customService(){
    this.ctx.body = await this.ctx.service.wechat.customService();
  }

  async signature(){
    const self    = this;
    const params  = {
      msg_signature : this.ctx.request.body.msg_signature,
      timestamp     : this.ctx.request.body.timestamp,
      nonce         : this.ctx.request.body.nonce,
      echostr       : this.ctx.request.body.echostr,
    };
    Tool.exescript("cmdstr",function(err,data){
      self.ctx.body = {
        "params" : params,
        "data"   : data
      };
    })  
    
  }
}

module.exports = WechatController;