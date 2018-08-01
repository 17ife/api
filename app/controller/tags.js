'use strict';

const Controller = require('egg').Controller;

class TagsController extends Controller {
  async findAll() {
    this.ctx.body = await this.ctx.service.tags.findAll();
  }
}

module.exports = TagsController;
