import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  notify: Ember.inject.service(),
  isEditing: false,
  todo: Ember.computed.alias('item'),
  actions: {
    onClickDone: function() {
      var _this = this;
      var todo = _this.get('todo');
      todo.set('done', !todo.get('done'));
      todo.save().then(function() {
        _this.get('notify').success('Tarefa alterada');
      }).catch(function() {
        _this.get('notify').error('Erro ao alterar tarefa.');
      });

    },
    edit: function() {
      var _this = this;
      _this.set('isEditing', true);
    },
    cancelEdit: function() {
      var _this = this;
      _this.set('isEditing', false);
    },
    remove: function() {
      var _this = this;
      var todo = _this.get('item');
      todo.destroyRecord().then(function() {
        _this.get('notify').success('Tarefa apagada.');
      }).catch(function() {
        _this.get('notify').error('Erro ao apagar tarefa.');
      });
    },
    update: function() {
      var _this = this;
      var todo = _this.get('item');
      todo.save().then(function() {
        _this.get('notify').success('Tarefa alterada');
        _this.set('isEditing', false);
      }).catch(function() {
        _this.get('notify').error('Erro ao alterar tarefa.');
      });
    }
  }
});
