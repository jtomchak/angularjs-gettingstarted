import _ from 'lodash';

const postService = ($http, API) => {
  let allPosts = [];

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
  

  return {get, getState, getPostById};
};

postService.$inject = ['$http', 'API'];

export {postService};
