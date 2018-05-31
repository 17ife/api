'use strict';

const Controller = require('egg').Controller;

class CommodityController extends Controller {
  async find() {
    const queries = this.ctx.queries;
    
    if(typeof queries.tags != "undefined"){
      const tags = queries.tags;
      this.ctx.body = await this.findByTag(queries.tags[0]);
    }
    else{
      this.ctx.body = await this.ctx.service.commodity.findAll();
    }
  }

  async findByTag(tagID) {
    const commodityList   = await this.ctx.service.commodity.findByTagID(tagID);
    return commodityList;
  }
}

module.exports = CommodityController;
