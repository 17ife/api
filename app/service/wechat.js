'use strict';
const Service     = require('egg').Service;
const Wechat      = require('../base/wechat');
const ToolService = require('../base/tools');
const Tool        = new ToolService();

class WechatService extends Service {
  constructor(){}

  async getAccessToken(vx){
    let response = await vx.getAccessToken(); 
    return Tool.formatReturnValue(true,response.errmsg,{
      access_token  : response.access_token,
      expires_in    : response.expires_in
    });
  }

  async customService(){
    
    let vx       = new Wechat({
      sercetID : "9KEUgFIhcLFvE0le0t184Pqop8Xnuga6dvF4AzD9ZnY"
    });

    try{
      let result   = await this.getAccessToken(vx);
      if(!result.assess_token){
        return result;
      }else{
        this.access_token = result.access_token;
        return result;
      }
    }
    catch(e){
      return e
    }

  }
}

module.exports = WechatService;