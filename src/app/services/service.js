import {api} from './api';
import {postService} from './postService';
import angular from 'angular';

export const service = angular.module('service', [])
  .constant('API', api)
  .factory('PostService', postService);

