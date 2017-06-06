import {blogDirective} from './blog.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

//TODO wire router
export const blog = angular.module('blog', [])
  .config(function($stateProvider) {
    
  })
  .directive('blog', blogDirective);
