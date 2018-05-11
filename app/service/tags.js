'use strict';
const Service = require('egg').Service;
const DB      = require('../base/mysql');

class TagService extends Service {
  async findAll(){
    let   db    = await new DB(this.app.mysql);
    const list  = await db.findAll('D_tags');
    return { success:true , msg:"" , data : list } ;
  }
}

module.exports = TagService;