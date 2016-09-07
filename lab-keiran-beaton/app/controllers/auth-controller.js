'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', '$window', function($http, $location, $window) {
    this.signUp = function(user) {
      $http.post(this.authUrl + '/signup', user)
      .then((res) => {
        $http.defaults.headers.common['Authorization'] ='Bearer ' + res.data.token;
      });
    };
  }]);
};
