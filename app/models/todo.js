import DS from 'ember-data';

export default DS.Model.extend({
  done: DS.attr('boolean', {defaultValue: false}),
  task: DS.attr('string')
});
