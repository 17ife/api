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
    let that = this;

    this.ctx.req.setEncoding('utf8');

    this.ctx.req.on('data',function(chunk){
      data += chunk;
    });
    
    this.ctx.req.on('end',function(){
      let wxXmlData         = await Tool.xml2json(data);
      params.data           = wxXmlData.xml;
      let cmdStr            = "python /home/api/extends/wechatCypt/getMsg.py " + params.msg_signature + " " + params.timestamp + " " + params.nonce + " " + params.data.ToUserName + " " + params.data.Encrypt + " " + params.data.AgentID;
      //解密后的对象
      let wxData            = await Tool.exescript(cmdStr);
      console.log(wxData)
      that.ctx.body         = "";
    });

  }
}

module.exports = WechatController;

// xml2js(data,{explicitArray:false}, function (err, json) {
//   console.log(json);//这里的json便是xml转为json的内容
//   params.data   = json.xml;
//   let cmdStr    = "python /home/api/extends/wechatCypt/getMsg.py " + params.msg_signature + " " + params.timestamp + " " + params.nonce + " " + params.data.ToUserName + " " + params.data.Encrypt + " " + params.data.AgentID;
//   console.log(cmdStr);
//   Tool.syncExeScript(cmdStr , function(stdout,stderr){
//     console.log(stdout);
//     console.log(stderr);
//     const userInfo = await this.ctx.service.wechat.answerUser({
//       sToUserName   : "",
//       sFromUserName : "wweeb673ca4f4dda8c",
//       sCreateTime   : "",
//       sMsgType      : "",
//       sContent      : "",
//       sMsgId        : "",
//       sAgentID      : params.data.AgentID
//     });
//     that.ctx.body = "";
//   })  
// });


