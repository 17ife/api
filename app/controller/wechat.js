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
      msg_signature : this.ctx.queries.msg_signature,
      timestamp     : this.ctx.queries.timestamp,
      nonce         : this.ctx.queries.nonce,
      echostr       : this.ctx.queries.echostr,
    };
    const cmdStr  = "python /home/api/extends/wechatCypt/crypt.py " + params.msg_signature + " " + params.timestamp + " " + params.nonce + " " + params.echostr 
    
    Tool.exescript(cmdStr,function(err,data){
      console.log("call")
      console.log("--------err---------");
      console.log(err);
      console.log("--------data---------");
      console.log(data);

      if(err){
        self.ctx.body = err;
      }
      else{
        self.ctx.body = data;
      }
      
    })  
    
  }
}

module.exports = WechatController;