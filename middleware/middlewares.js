const bodyParser = require('body-parser');

async function xmlparser(ctx, next) {
  ctx.app.use(bodyParser.urlencoded({
    extended:true
  }));
  await next();
}