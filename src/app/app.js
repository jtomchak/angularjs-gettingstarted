import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

import {home} from './components/home/home';
import {blog} from './components/blog/blog';
import {navbar} from './components/navbar/navbar';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  uiRouter,
  home.name,
  blog.name,
  navbar.name

])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;