
const wechat = require('co-wechat');
 
module.exports =  options => {
  return wechat(options).middleware(async (message, ctx) => {
    // TODO
    console.log(1111);
    console.log(message);
    console.log(ctx);
    return { type: "text", content: 'Hello world!' };
  });
}