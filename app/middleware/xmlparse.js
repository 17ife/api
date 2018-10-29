const bodyParser = require('body-parser');

module.exports = options => {
  return async function (ctx, next) {
    ctx.app.use(bodyParser.urlencoded({
      extended:true
    }));
    await next();
  }
}
