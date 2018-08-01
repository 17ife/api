'use strict';
const Service     = require("egg").Service;
const ToolService = require('../base/tools');
const Tool        = new ToolService();
const jsonpath    = __dirname + "/dictionaries/";

class DictionaryService extends Service {
  async getDictionaryFromPath(file){
    let filepath  = require(jsonpath + file + ".json");
  }
}