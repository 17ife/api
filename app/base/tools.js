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

  exescript(cmdstr,cb) {
    cb(null,cmdstr);
    // exec(cmdStr , function(err,stdOut,stdErr){
    //   if(err){
    //     console.log(err);
    //   }
    //   cb(stdErr,stdOut);
    // });
  }

  doLog() {}

}

module.exports = ToolService;