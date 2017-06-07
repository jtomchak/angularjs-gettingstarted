// create our controller using the
// highly controversial class
import _ from 'lodash';

class HomeController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor(PostService) {
    this.title = 'Welcome to the blog!';
    this.PostService = PostService;
    this.getPosts();
  }
 //TODO: let's make posts show in the view
 //BONOUS: only the first 10 
  getPosts() {
    this.PostService.get()
      .then(() => {
        this.posts = this.PostService.getState();
      });
  }
}

HomeController.$inject = ['PostService'];
// could also just export the class up top as well
export {HomeController};
