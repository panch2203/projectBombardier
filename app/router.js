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
  this.route('create-personal');
  this.route('finalizar-curso');
  this.route('generar-documentos');
  this.route('cursoespecifico');
  this.route('personalespecifico');
  this.route('login');
});

export default Router;
