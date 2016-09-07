'use strict';

module.exports = function(app) {
  app.controller('NoteFormController', ['$scope', '$log', function($scope, $log) {
    this.note = $scope.note || {};
    this.saveNote = $scope.saveNote;
    this.noteButtonText = $scope.noteButtonText;
    this.saveNoteAndNull = () => {
      $log.debug('nfCtrl.saveNoteAndNull');
      this.saveNote({note: this.note});
      $log.log('nfCtrl.note', this.note);
      if(!$scope.note) this.note = null;
    };
  }]);
};
