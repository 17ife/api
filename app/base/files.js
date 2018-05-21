'use strict';

const ToolService = require('./tools');
const Tool        = new ToolService();

class FileService {
  constructor(){
    
  }

  init() {

  }

  async readData(path) {
    let exists = await this.isExist(path);
    if(exists){
      fs.readFile(this.filePath,(err,data)=>{
        if(err) {
          return Tool.formatReturnValue(false,msg,null);
        }else{
          return Tool.formatReturnValue(true,"OK",data); 
        }
      })
      
    }else{
      return Tool.formatReturnValue(false,"File is not exist",null); 
    }
  }

  async writeData(path,fdata){
    let exists = await this.isExist(path);
    if(!exists){
      fs.writeFile(path, fdata , (err) => {
        if (err) {
          throw err;
          return Tool.formatReturnValue(false,err,null);
        }
        else{
          return Tool.formatReturnValue(true,"The file has been saved!" ,null);
        }
      });
    }
  }

  async isExist(path) {
    let filePath = path;
    fs.open(filePath, 'wx', (err, fd) => {
      if (err) {
        if (err.code === 'EEXIST') {
          return true;
        }
        throw err;
      }
      return false;
    });
  }
}

module.exports = FileService;

/*
var File = require('./files.js');
var path = 'E:/api/app/base/mysql.js'
var fsrv = new File(path);
var r = await fsrv.isExist()
console.log(r)
*/