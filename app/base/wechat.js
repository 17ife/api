'use strict';

const contactSercetID  =  "1A9PvBYbnLs3XnbTOaZT7Cygauc-7j2RM3ezgmD04-Y";
const cropID           =  "wweeb673ca4f4dda8c";
const wechatURL        =  "https://qyapi.weixin.qq.com/cgi-bin/gettoken";
const rp               =  require('request-promise');


class WechatService {
  constructor(params) {
    console.log(params)
    this.corpsecret = params.sercetID;
  }

  async getAccessToken() {
    try {
      const corpsecret = this.corpsecret;

      const result = await rp({
        method    : 'GET',
        uri       : wechatURL + '?corpid=' + cropID + "&corpsecret=" + corpsecret,
        json      : true
      });
      
      return result;
    }
    catch(e) {
      return e;
    }
  }
}

module.exports = WechatService;