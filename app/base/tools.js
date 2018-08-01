'use strict';
const uuidv4 = require("uuid/v4");
var exec     = require('child_process').exec; 

class ToolService {
  constructor(){}

  formatReturnValue(success,msg,data) {
    return { success : success , msg : msg , data : data };
  }

  generateUid() {
    return uuidv4();
  }

  exescript(cmdstr,cb) {
    // cb(null,cmdstr);
    exec(cmdstr , function(err,stdOut,stdErr){
      console.log(err);
      console.log(stdOut);
      console.log(stdErr);
      if(err){
        console.log(err);
      }
      cb(stdErr,stdOut);
    });
  }

  doLog() {}

}

module.exports = ToolService;
