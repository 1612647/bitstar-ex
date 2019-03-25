const controller = require('../controllers/user');

module.exports = (app) => {
  app.route('/users').get(controller.get_all_users),
    app.route('/users/:userId').get(controller.get_a_user),
    app.route('/users').post(controller.insert_a_user),
    app.route('/users/:userId').put(controller.update_a_user),
    app.route('/users/:userId').delete(controller.delete_a_user)
}