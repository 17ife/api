'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const xmlparse = app.middleware.xmlparse();
  router.get('/', controller.home.index);
  router.get('/testGet',controller.home.testGet);
  router.get('/tags',controller.tags.findAll);
  router.get('/commodities',controller.commodity.find);
  router.get('/wechat',controller.wechat.customService);
  router.get('/signature', controller.wechat.signature);
  router.post('/signature', controller.wechat.getMsg);
  // router.post('/scrapy/dealnews/add',app.controller.scrapy.create);
  // router.post('/csrf',app.controller.scrapy.crsf);

  //CURD
  // router.get('/user/add',app.controller.user.create);
  // router.get('/user/all',app.controller.user.all);
  // router.get('/user/query/:id', app.controller.user.info);
  // router.get('/user/update/:id', app.controller.user.update);
};

