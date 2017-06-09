import _ from 'lodash';

class BlogDetailController {
  constructor(PostService, $stateParams) {
    this.PostService = PostService;
    this.post = this.PostService.getPostById($stateParams.postId);
    console.log(this.post);
  }
  
}

BlogDetailController.$inject = ['PostService', '$stateParams'];
// could also just export the class up top as well
export {BlogDetailController};
