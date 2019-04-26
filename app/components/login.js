import Component from '@ember/component';

export default Component.extend({
  className: ['login'],
  inlineStyle: (function(){
    return window.innerHeight;
  })
});
