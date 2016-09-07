'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', '$window', function($http, $location, $window) {

    this.signUp = function(user) {
      console.log(this.authUrl);
      $http.post(this.authUrl + '/signup', user)
      .then((res) => {
        $http.defaults.headers.common['Authorization'] ='Bearer ' + res.data.token;
        $location.path('/lists');
      }, (err) => {
        console.log('error in $ctrl.signUp', err);
      });
    };

    this.signIn = function(user) {
      $http.get(this.authUrl + '/signin', {
        headers: {
          'Authorization': 'Basic ' + $window.btoa(user.email + ':' + user.password)
        }
      })
      .then((res) => {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
        $location.path('/lists');
      }, (err) => {
        console.log('error in $ctrl.signIn', err);
      });
    };
  }]);
};
