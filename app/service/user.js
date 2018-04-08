'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await app.mysql.get('house').query('select * from tb_userinfo where id = ?', uid);
    return user;
  }
}

module.exports = UserService;