'use strict';

const contactSercetID  =  "1A9PvBYbnLs3XnbTOaZT7Cygauc-7j2RM3ezgmD04-Y";
const wechatURL        =  "https://qyapi.weixin.qq.com/cgi-bin/gettoken";
const request          =  require("requestretry");

class WechatBase {
  constructor(params) {
    contactSercetID = contactSercetID;
  }

  getAccessToken() {
    return request({
      url           : wechatURL,
      json          : true,
      fullResponse  : true
    });
  }
}

module.exports = WechatBase;