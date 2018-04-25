'use strict';

const BaseService = require('./base');

class ScrapyService extends BaseService {
  constructor(){
    super();
  } 
  
  async addDealNews(entity){
    return this.create('M_dealnews',entity);
  }
}

module.exports = ScrapyService;