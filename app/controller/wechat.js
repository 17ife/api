const Controller   = require('egg').Controller;
const ToolService  = require('../base/tools');
const Tool         = new ToolService();
const xml2js       = require('xml2js').parseString;
// const util         = require('util');
// const xml2js       = util.promisify(require('xml2js').parseString);

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
    };

    console.log(params);

    let data = '';
    this.ctx.req.setEncoding('utf8');
    this.ctx.req.on('data',function(chunk){
      data += chunk;
    });
    let that = this;
    this.ctx.req.on('end',function(){
      xml2js(data,{explicitArray:false}, function (err, json) {
        console.log(json);//这里的json便是xml转为json的内容
        params.data   = json.xml.Encrypt;
        let cmdStr    = "python /home/api/extends/wechatCypt/getMsg.py " + params.msg_signature + " " + params.timestamp + " " + params.nonce + " " + params.data ;
        tool.syncExeScript(cmdStr , function(stdout,stderr){
          console.log(stdout);
          console.log(stderr);
          that.ctx.body = 'success';
        })        
      });
    });
  }
}

module.exports = WechatController;