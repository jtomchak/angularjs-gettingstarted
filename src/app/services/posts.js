import _ from 'lodash';

const posts = ($http, API, $q) => {
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

};

posts.$inject = ['$http', 'API', '$q'];

export {posts};
