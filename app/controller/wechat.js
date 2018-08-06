const Controller   = require('egg').Controller;
const ToolService  = require('../base/tools');
const Tool         = new ToolService();

class WechatController extends Controller {

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

  async getMsg(){
    const params  = {
      msg_signature     : this.ctx.queries.msg_signature,
      timestamp         : this.ctx.queries.timestamp,
      nonce             : this.ctx.queries.nonce,
      data              : this.ctx.request.body.Encrypt,
    };

    console.log("==== get MSG ====");

    console.dir(params);

    const stream = await this.ctx.getFileStream();

    console.log(stream);

    this.ctx.body  = "ok";
  }
}

module.exports = WechatController;