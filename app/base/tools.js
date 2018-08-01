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

  exescript(cmdstr , cb) {
    exec(cmdstr , function(err,stdOut,stdErr){
      console.log(err);
      console.log(stdOut);
      console.log(stdErr);
      console.log("111111")
      if(err){
        console.log(err);
      }
      console.log("222222")
      cb(stdErr,stdOut);
    });
  }

  doLog() {}

}

module.exports = ToolService;
