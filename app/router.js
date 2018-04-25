'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/scrapy/dealnews/add',app.controller.scrapy.create);
  router.post('/csrf',app.controller.scrapy.crsf);
  //CURD
  // router.get('/user/add',app.controller.user.create);
  // router.get('/user/all',app.controller.user.all);
  // router.get('/user/query/:id', app.controller.user.info);
  // router.get('/user/update/:id', app.controller.user.update);
};

