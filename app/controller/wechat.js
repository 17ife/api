const Controller   = require('egg').Controller;
const ToolService  = require('../base/tools');
const Tool         = new ToolService();
const xml2js       = require('xml2js').parseString;
const json2xml     = require('xml2js').Builder();
// const util         = require('util');
// const xml2js       = util.promisify(require('xml2js').parseString);

class WechatController extends Controller {

  async message(){

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

  async getMsg(){
    const params  = {
      msg_signature     : this.ctx.queries.msg_signature,
      timestamp         : this.ctx.queries.timestamp,
      nonce             : this.ctx.queries.nonce,
    };

    let data = '';
    let that = this;

    this.ctx.req.setEncoding('utf8');

    this.ctx.req.on('data',function(chunk){
      data += chunk;
    });

    this.ctx.req.on('end',function(){

      xml2js(data,{ explicitArray:false }, function (err, json) {
        console.log(1);//这里的json便是xml转为json的内容
        params.data   = json.xml;
        let cmdStr    = "python /home/api/extends/wechatCypt/getMsg.py " + params.msg_signature + " " + params.timestamp + " " + params.nonce + " " + params.data.ToUserName + " " + params.data.Encrypt + " " + params.data.AgentID;
        
        Tool.syncExeScript(cmdStr , function(stdout,stderr){

          console.log(2);

          xml2js(stdout , { explicitArray:false } , function(err,json2){

            console.log(3);
      
            let cmdParams  = {
              sToUserName   : json2.FromUserName,
              sFromUserName : "wweeb673ca4f4dda8c",
              sCreateTime   : json2.CreateTime,
              sMsgType      : json2.MsgType,
              sContent      : "replay " + json2.Content,
              sMsgId        : json2.MsgId,
              sAgentID      : params.AgentID
            }
            
            console.log(4);

            let reCmdStr = "python /home/api/extends/wechatCypt/sendMsg.py";
      
            reCmdStr    += " " + cmdParams.sToUserName;
            reCmdStr    += " " + cmdParams.sFromUserName;
            reCmdStr    += " " + cmdParams.sCreateTime;
            reCmdStr    += " " + cmdParams.sMsgType;
            reCmdStr    += " " + cmdParams.sContent;
            reCmdStr    += " " + cmdParams.sMsgId;
            reCmdStr    += " " + cmdParams.sAgentID;
            reCmdStr    += " " + params.nonce;
            reCmdStr    += " " + params.timestamp;
      
            console.log(5);

            Tool.syncExeScript(reCmdStr , function(restdout,restderr){
              if(restderr){
                console.log(restderr)
              };

              let result = json2xml(restdout);

              ctx.res.setHeader('Content-Type', 'application/xml')
              ctx.res.end(result)
            });
      
          });

        });

      });
     
    });
  }
}

module.exports = WechatController;




      // Tool.xml2json(data).then((json,err)=>{
      //   params.data           = json.xml;
      //   console.log(params);
      //   let cmdStr            = "python /home/api/extends/wechatCypt/getMsg.py " + params.msg_signature + " " + params.timestamp + " " + params.nonce + " " + params.data.ToUserName + " " + params.data.Encrypt + " " + params.data.AgentID;
      //   //解密后的对象
      //   syncExeScript(cmdStr , function(stdout,stderr){
      //     console.log(wxData)
      //     Tool.xml2json(stdout).then((json2,err)=>{
      //       let wxData  = json2;
      //       let cmdParams  = {
      //         sToUserName   : wxData.FromUserName,
      //         sFromUserName : "wweeb673ca4f4dda8c",
      //         sCreateTime   : new Date(),
      //         sMsgType      : wxData.MsgType,
      //         sContent      : "replay " + wxData.Content,
      //         sMsgId        : wxData.MsgId,
      //         sAgentID      : params.data.AgentID
      //       }
            
      //       let reCmdStr = "python /home/api/extends/wechatCypt/sendMsg.py";

      //       reCmdStr    += " " + cmdParams.sToUserName;
      //       reCmdStr    += " " + cmdParams.sFromUserName;
      //       reCmdStr    += " " + cmdParams.sCreateTime;
      //       reCmdStr    += " " + cmdParams.sMsgType;
      //       reCmdStr    += " " + cmdParams.sContent;
      //       reCmdStr    += " " + cmdParams.sMsgId;
      //       reCmdStr    += " " + cmdParams.sAgentID;

      //       syncExeScript(reCmdStr , function(reStdout,reStderr){
      //         console.log(reStdout);
      //         console.log(reStderr);
      //         that.ctx.body         = "";
      //       });

      //     })  
      //   });
      // });