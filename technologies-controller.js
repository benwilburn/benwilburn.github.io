angular.module('personal-site')
  .controller('technologiesCtrl', function($scope, WebsiteFactory){
    $scope.imageArray = [];
    WebsiteFactory.getLinks().then(res => {
      technologies = res.technology_images;
      for(var items in technologies){
        $scope.imageArray.push(technologies[items].image);
      };
      console.log($scope.imageArray);
    })
  })
