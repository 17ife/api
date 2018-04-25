const Controller = require('egg').Controller;

class ScrapyController extends Controller{
  async create(){
    const entity = {
      title : this.ctx.request.body.title,
      link : this.ctx.request.body.link,
      picture : this.ctx.request.body.picture,
      hotness : this.ctx.request.body.hotness,
      editor_recommond : this.ctx.request.body.editor,
      posttime : this.ctx.request.body.posttime,
      description : this.ctx.request.body.description,
      price : this.ctx.request.body.price,
      shipping : this.ctx.request.body.shipping
    }
    console.log(entity);
    this.ctx.body = await this.ctx.service.scrapy.addDealNews(entity);
  }
  async crsf(){
    this.ctx.body = {
      msg : this.ctx.request.body.msg
    }
  }
}

module.exports = ScrapyController;