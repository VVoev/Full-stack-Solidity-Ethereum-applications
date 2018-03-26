const routes = require('next-routes')();
routes.add('/campaigns/:adress','./pages/campaigns/show')

module.exports = routes;