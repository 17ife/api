'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //CURD
  // router.get('/user/add',app.controller.user.create);
  // router.get('/user/all',app.controller.user.all);
  // router.get('/user/query/:id', app.controller.user.info);
  // router.get('/user/update/:id', app.controller.user.update);
};

