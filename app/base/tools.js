'use strict';

class ToolService {
  constructor(){}

  formatReturnValue(success,msg,data){
    return { success : success , msg : msg , data : data };
  }

}

module.exports = ToolService;