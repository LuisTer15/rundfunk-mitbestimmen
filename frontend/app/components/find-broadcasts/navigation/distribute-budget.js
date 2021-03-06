import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  buttonCss: Ember.computed('recentPositives', function() {
    switch(this.get('recentPositives')) {
      case 0: return 'disabled';
      case 1: return 'large';
      case 2: return 'big';
      default: return 'big primary';
    }
  }),
});
