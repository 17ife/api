'use strict';

class FileService {
  constructor(path){
    this.filePath = path;
    this.msg = "";
  }

  init() {

  }

  setMsg(msg) {
    this.msg = msg;
  }

  getMsg() {
    return this.msg;
  }

  getPath() {
    return this.filePath;
  }

  async isExist() {
    let filePath = getPath();
    fs.open(filePath, 'wx', (err, fd) => {
      if (err) {
        if (err.code === 'EEXIST') {
          msg = 'myfile already exists';
          return;
        }
    
        throw err;
      }
    
      writeMyData(fd);
    });
  }
}

module.exports = FileService;