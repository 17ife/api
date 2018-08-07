'use strict';
const uuidv4 = require("uuid/v4");
const util   = require('util');
const exec   = util.promisify(require('child_process').exec);
const xml2js = util.promisify(require('xml2js').parseString);

class ToolService {
  
  constructor(){}

  formatReturnValue(success,msg,data) {
    return { success : success , msg : msg , data : data };
  }

  generateUid() {
    return uuidv4();
  }

  async exescript(cmdstr) {
    const { stdout, stderr } = await exec(cmdstr);
    return  { "stdout" :  stdout , "stderr" : stderr }
  }

  doLog() {}

}

module.exports = ToolService;
