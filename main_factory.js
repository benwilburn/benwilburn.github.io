angular.module('personal-site')
  .factory('MainFactory', function($http) {
    return {
      getLinks: function () {
        return $http.get('websites.json').then((res) => {
          var info = res.data
          return info
        })
      }
    }
  })
