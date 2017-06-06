import angular from 'angular';
import uiRouter from 'angular-ui-router';

import '../style/app.css';

import {home} from './components/home/home';
import {blog} from './components/blog/blog';

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
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;