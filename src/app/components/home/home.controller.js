// create our controller using the
// highly controversial class
import _ from 'lodash';

class HomeController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor(Posts) {
    this.title = 'Welcome to the blog!';
    this.Posts = Posts;
    this.getPosts();
  }
  
  getPosts() {
    this.Posts.get()
      .then(() => {
        this.posts = this.Posts.getState();
        console.log(this.Posts);
      });
  }
}

HomeController.$inject = ['Posts'];
// could also just export the class up top as well
export {HomeController};
