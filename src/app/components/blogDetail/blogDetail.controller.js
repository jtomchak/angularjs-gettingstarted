import _ from 'lodash';

class BlogDetailController {
  constructor(PostService, $stateParams) {
    this.PostService = PostService;
    this.postId = $stateParams.postId;
    this.getPostById();
    console.log(this.postId);
  }
  getPostById() {
    this.PostService.get()
      .then(() => {
        this.posts = this.PostService.getState();
      });
  }

}

BlogDetailController.$inject = ['PostService', '$stateParams'];
// could also just export the class up top as well
export {BlogDetailController};
