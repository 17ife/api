'use strict';

const Controller = require('egg').Controller;

class CommodityController extends Controller {
  async findAll() {
    this.ctx.body = await this.ctx.service.commodity.findAll();
  }
}

module.exports = CommodityController;
