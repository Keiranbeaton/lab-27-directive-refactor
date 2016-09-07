'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const crudApp = angular.module('crudApp', []);

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

require('./components')(crudApp);
