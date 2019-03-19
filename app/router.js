import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('createCurso');
  this.route('enrolarcurso');
  this.route('personal');
});

export default Router;
