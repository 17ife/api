const bodyParser = require('body-parser');

module.exports = options => {
  async function xmlparser(ctx, next) {
    ctx.app.use(bodyParser.urlencoded({
      extended:true
    }));
    await next();
  }
}
