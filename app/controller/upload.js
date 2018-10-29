'use strict';
const path             = require('path');
const FormStream       = require('formstream');
const sendToWormhole   = require('stream-wormhole');
const Controller       = require('egg').Controller;
const FileService      = require('../base/files');
const ToolService      = require('../base/tools');
const Fsrv             = new FileService();
const Tool             = new ToolService();

class UploadController extends Controller {
  // async uploadSingleFileToServer() {
  //   const ctx = this.ctx;
  //   const stream = await ctx.getFileStream();
  //   const filePath = "/home/files/" + path.basename(stream.filename);

  //   try {
  //     let r = await Fsrv.writeData(filePath,stream);
  //   } catch (err) {
  //     await sendToWormhole(stream);
  //     throw err;
  //   }
    
  //   if(r){
  //     ctx.body = r
  //   }else{
  //     ctx.body = Tool.formatReturnValue(false,err,null);
  //   }
  // }
  async upload() {
    const ctx   = this.ctx;
    const form  = new FormStream();
  }


}

module.exports = UploadController;