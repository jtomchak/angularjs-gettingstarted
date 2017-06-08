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

  getPosts() {
    this.PostService.get()
      .then(() => {
        this.posts = this.PostService.getState();
      });
  }

//TODO: this method is called when a user selects a post from the homepage 
//TODO: what we want is for them to be taken to a 'details' page with all the info from that post
//TODO BONOUS: back button on page, not browser back to take them back to the full list
  onSelect(postId) {
    console.log(postId);
  }
}

HomeController.$inject = ['PostService'];
// could also just export the class up top as well
export {HomeController};
