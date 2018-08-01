'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('tb_userinfo', { id: uid });
    return { user };
  }

  async findAll(){
    const list = await this.app.mysql.select('tb_userinfo');
    return { list }
  }

  async create(uobject){
    try{
      const result = await this.app.mysql.insert('tb_userinfo',uobject);
      return result;
    }catch(e){
      return { e };
    }
  }

  async update(row,options){
    try{
      const result = await this.app.mysql.update('tb_userinfo', row, options);
      return result;
    }catch(e){
      return { e };
    }
  }
}

module.exports = UserService;