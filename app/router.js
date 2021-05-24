import EmberRouter from '@ember/routing/router';
import config from 'consultation-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('consult', {path: '/consult/:role'});
  this.route('consultationoptions');
});
