import _ from 'lodash';

const postService = ($http, API) => {
  let allPosts = [];

  const init = () => {
    $http.get(`${API.url}/posts`)
      .then(({data}) => {
       var tempPosts = data.map(post => {
          // post.slug = post.title.replace(/\s+/g, '-');
          return post;
        });
        allPosts.length = 0;
        allPosts.push.apply(allPosts, tempPosts);
      });
  }

  const get = () => {
    return $http.get(`${API.url}/posts`)
      .then(({data}) => {
        allPosts = data.map(post => {
          // post.slug = post.title.replace(/\s+/g, '-');
          return post;
        });
      });
  };

  const getState = () => {
    return allPosts;
  };

  const getPostById = postId => allPosts.find(x => x.id == postId)
  

  return {get, getState, getPostById, init, allPosts};
};

postService.$inject = ['$http', 'API'];

export {postService};
