'use strict';
const uuidv4 = require("uuid/v4");
const util   = require('util');
const exec   = util.promisify(require('child_process').exec);
const xml2js = util.promisify(require('xml2js').parseString);
const pexec  = require('child_process').exec;

class ToolService {
  
  constructor(){}

  formatReturnValue(success,msg,data) {
    return { success : success , msg : msg , data : data };
  }

  generateUid() {
    return uuidv4();
  }

  syncExeScript(cmdstr,cb){
    pexec(cmdstr,function(error,stdout,stderr){
      cb(stdout,stderr);
    })
  }

  async exescript(cmdstr) {
    const { stdout, stderr } = await exec(cmdstr);
    return  { "stdout" :  stdout , "stderr" : stderr }
  }

  async xml2json(str) {
    const { err , json } = await xml2js(str,{explicitArray:false});
    return { "err" : err , "data" : json }
  }

  jsonToXml(obj){
    const builder = new xml2js.Builder()
    return builder.buildObject(obj)
  }

  doLog() {}

}

module.exports = ToolService;
