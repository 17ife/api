const Controller = require('egg').Controller;

class ScrapyController extends Controller{
  async create(){
    const entity = {
      title : this.ctx.params.title,
      link : this.ctx.params.link,
      picture : this.ctx.params.picture,
      hotness : this.ctx.params.hotness,
      editor_recommond : this.ctx.params.editor,
      posttime : this.ctx.params.posttime,
      description : this.ctx.params.description,
      price : this.ctx.params.price,
      shipping : this.ctx.params.shipping
    }

    this.ctx.body = await this.ctx.service.scrapy.create(entity);
  }
}

module.exports = ScrapyController;