const Controller   = require('egg').Controller;
const ToolService  = require('../base/tools');
const Tool         = new ToolService();
const wechat       = require('co-wechat');

class cowechatController extends Controller {}

cowechatController.prototype.wechat = wechat({
  token: 'wYA10XSUEzL1EQmdCyXFd9hzGNsM',
  appid: 'wweeb673ca4f4dda8c',
  encodingAESKey: 'iuSFA11uMgA86sTS2ZiadHxMtQjvpk6BzUSsnSQ9NiY'
}).middleware(async (message, ctx) => {
  console.log(message);
  console.log(ctx);
  return { type: "text", content: 'Hello world!' };
});
  
module.exports = cowechatController;

// URL 
// http://140.82.4.24:7001/signature
// Token
// wYA10XSUEzL1EQmdCyXFd9hzGNsM
// EncodingAESKey
// iuSFA11uMgA86sTS2ZiadHxMtQjvpk6BzUSsnSQ9NiY

// AgentId
// 1000003
// Secret
// r4dM9OyWOXydlB-dTUh83SbMA_LkchKpdQjKsoHD2XQ