import _ from 'lodash';

class BlogsController {
  constructor(PostService, $location, $state) {
    this.message = 'The latest from the blog!';
    this.PostService = PostService;
    this.$location = $location;
    this.$state = $state;
    // this.getPosts();
    this.posts = PostService.getState();
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
    this.$state.transitionTo('blogs.detail', {postId:postId});
  }
}

BlogsController.$inject = ['PostService', '$location', '$state'];
// could also just export the class up top as well
export {BlogsController};
