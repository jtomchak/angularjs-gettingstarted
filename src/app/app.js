import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

import {home} from './components/home/home';
import {blogs} from './components/blogs/blogs';
import {blogDetail} from './components/blogDetail/blogDetail';
import {navbar} from './components/navbar/navbar';


import {service} from './services/service';

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
  blogs.name,
  blogDetail.name,
  navbar.name,
  service.name,

])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;