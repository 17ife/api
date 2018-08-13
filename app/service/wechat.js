'use strict';
const Service      = require('egg').Service;
const ToolService  = require('../base/tools');
const Tool         = new ToolService();
const xml2js       = require('xml2js').parseString;
const cmd          = "python /home/api/extends/wechatCypt/sendMsg.py"

class WechatService extends Service {
  async answerUser(params){
    let cmdStr    = "";
    cmdStr       += " " + params.sToUserName;
    cmdStr       += " " + params.sFromUserName;
    cmdStr       += " " + params.sCreateTime;
    cmdStr       += " " + params.sMsgType;
    cmdStr       += " " + params.sContent;
    cmdStr       += " " + params.sMsgId;
    cmdStr       += " " + params.sAgentID;
    let result    = await Tool.exescript(cmdStr);

    return result;
  }
}

module.exports = WechatService;