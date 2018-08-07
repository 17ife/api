module.exports = () => {
  return async function xmlparser(ctx, next) {
    const bodyParser = require('body-parser');
    ctx.app.use(bodyParser.urlencoded({
      extended:true
    }));
    await next();
  }
};