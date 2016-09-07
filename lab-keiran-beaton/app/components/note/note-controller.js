'use strict';

module.exports = function(app) {
  app.controller('NoteController', ['$log', '$http', '$scope', NoteController]);

  function NoteController($log, $http) {
    this.notes = [];
    this.getAllNotes = function() {
      $log.debug('noteCtrl.getAllNotes');
      $http.get(this.noteUrl, this.config)
        .then((res) => {
          $log.log('noteCtrl.getAllNotes res.data', res.data);
          this.notes = res.data.filter((note) => {
            if(note.listId === this.list._id) {
              return note;
            }
          });
          $log.log('this.notes', this.notes);
        }, err => {
          $log.error('error in noteCtrl.getAllNotes', err);
        });
    };


    this.deleteNote = function(note) {
      $log.debug('noteCtrl.deleteNote');
      $http.delete(this.noteUrl + '/' + note._id, this.config)
        .then((res) => {
          this.notes.splice(this.notes.indexOf(note), 1);
          $log.log('noteCtrl.deleteNote res', res);
        }, err => {
          $log.error('error in noteCtrl.deleteNote', err);
        });
    };

    this.updateNote = function(note) {
      $log.debug('noteCtrl.updateNote');
      $http.put(this.noteUrl + '/' + note._id, note, this.config)
        .then(res => {
          note.editing = false;
          $log.log('noteCtrl.updateNote res', res);
        }, err => {
          $log.error('error in noteCtrl.updateNote', err);
        });
    };

    this.createNote = function(note) {
      $log.debug('noteCtrl.createNote');
      note.listId = this.list._id;
      $http.post(this.noteUrl, note, this.config)
        .then(res => {
          $log.log('successfully created note', res.data);
          $log.log('noteCtrl.notes before', this.notes);
          this.notes.push(res.data);
          $log.log('noteCtrl.notes after', this.notes);
        })
        .catch(err => {
          $log.error('error in noteCtrl.createNote', err);
        });
    };
  }
};
