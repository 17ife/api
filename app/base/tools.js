'use strict';
const uuidv4 = require("uuid/v4");

class ToolService {
  constructor(){}

  formatReturnValue(success,msg,data) {
    return { success : success , msg : msg , data : data };
  }

  generateUid() {
    return uuidv4();
  }

  doLog() {}

}

module.exports = ToolService;