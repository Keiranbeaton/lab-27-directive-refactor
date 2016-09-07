'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const crudApp = angular.module('crudApp', [require('angular-route')]);

require('./components')(crudApp);
require('./controllers')(crudApp);

crudApp.run(['$rootScope', ($rs) => {
  $rs.authUrl = `${__API_URL__}/api`;
  $rs.listUrl = `${__API_URL__}/api/list`;
  $rs.noteUrl = `${__API_URL__}/api/note`;
  $rs.httpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
}]);

crudApp.config(['$routeProvider', ($rp) => {
  $rp
  .when('/lists', {
    template: require('./html/lists.html')
  })
  .when('/signup', {
    template: require('./html/signup.html')
  })
  .when('/signin', {
    template: require('./html/signin.html')
  })
  .otherwise({
    redirectTo: 'lists'
  });
}]);
