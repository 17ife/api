'use strict';
const Service = require('egg').Service;

class ScrapyService extends Service {
  async addDealNews(entity){
    try{
      const result = await this.app.mysql.insert('M_dealnews',entity);
      return result;
    }catch(e){
      return { e };
    }
  }
}

module.exports = ScrapyService;