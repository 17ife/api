const path = require('path');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;

module.exports = class UploadController extends Controller {
  async uploadSingleFileToServer() {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    const filePath = "/home/files/" + path.basename(stream.filename);
    let msg = "";

    try {
      
    } catch (err) {
      // must consume the stream, otherwise browser will be stuck.
      await sendToWormhole(stream);
      throw err;
    }
 
    ctx.body = {
      
    };
  }
}