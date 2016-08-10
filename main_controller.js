angular.module('personal-site')
  .controller('website-ctrl', function($scope, MainFactory){
    $scope.app_name = "Ben's Portfolio"
    MainFactory.getLinks().then(res => {
      console.log("wat", res)
      $scope.data = res
    })

    
  })
