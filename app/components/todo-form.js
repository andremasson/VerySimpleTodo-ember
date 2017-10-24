import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  store: Ember.inject.service(),
  notify: Ember.inject.service(),
  newTask: '',
  saveTask: function() {

  },
  actions: {
    addTask: function() {
      var _this = this;
      var newTask = _this.get('newTask');
      var todo = _this.get('store').createRecord('todo', {
        task: newTask,
        done: false
      });
      todo.save().then(function(){
        _this.set('newTask', '');
        _this.get('notify').success('Nova tarefa criada!');
      }).catch(function(error){
        _this.get('notify').error('Erro ao gravar tarefa: ' + error);
      });
    },
  }
});
