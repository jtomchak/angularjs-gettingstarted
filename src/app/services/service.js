import {api} from './api';
import {posts} from './posts';
import angular from 'angular';

export const service = angular.module('service', [])
  .constant('API', api)
  .factory('Posts', posts);

