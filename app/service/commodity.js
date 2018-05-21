'use strict';
const Service     = require('egg').Service;
const DB          = require('../base/mysql');
const ToolService = require('../base/tools');
const Tool        = new ToolService();

class CommodityService extends Service {
  async findAll(){
    let   db    = await new DB(this.app.mysql);
    const list  = await db.findAll('B_commodity');
    return Tool.formatReturnValue(true,"OK",list);
  }
}