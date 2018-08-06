
const wechat = require('co-wechat');
 
module.exports = (options, app) => {
  return wechat(options).middleware(async (message, ctx) => {
    console.log(message);
    ctx.body = "OK";
  });
};

