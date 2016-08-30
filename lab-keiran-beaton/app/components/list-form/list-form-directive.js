'use strict';

module.exports = function(app) {
  app.directive('kbListForm', function() {
    return {
      controller: 'ListFormController',
      controllerAs: 'formCtrl',
      template: require('./list-form-template.html'),
      transclude: true,
      scope: {
        buttonText: '@',
        save: '&',
        list: '='
      }
    };
  });
};
