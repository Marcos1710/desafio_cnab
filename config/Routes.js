module.exports = app => {
  
    app.route('/create/users')
      .post(app.controllers.Users.store)
  
    app.route('/session')
      .post(app.controllers.Users.index)

    app.route('/cnabs')
      .get(app.controllers.Cnab.index)

    app.route('/cnab')
      .get(app.controllers.Cnab.show)
      .post(app.controllers.Cnab.store)
  }