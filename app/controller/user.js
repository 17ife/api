const Controller = require('egg').Controller;
class UserController extends Controller {
  async info() {
    const userId = this.ctx.params.id;
    const userInfo = await this.ctx.service.user.find(userId);
    this.ctx.body = userInfo;
  }
  async all(){
    const list = await this.ctx.service.user.findAll();
    this.ctx.body = list;
  }
  async create(){
    const userInfo = await this.ctx.service.user.create({
      username:"test",
      password:"123456",
      usertype:"develop"
    });

    this.ctx.body = userInfo;
  }
  async update(){
    const userId = this.ctx.params.id;
    const row = {
      username: 'test update'
    }

    const options = {
      where : {
        id : userId
      }
    }

    const result =  await this.ctx.service.user.update(row,options);
    this.ctx.body = result;
  }
}
module.exports = UserController;