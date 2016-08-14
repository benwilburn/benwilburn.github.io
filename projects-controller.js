angular.module('personal-site')
  .controller('projectsCtrl', function($scope, WebsiteFactory){
    WebsiteFactory.getLinks().then(res => {
      console.log("wat", res.links)
      deployedSites = res.links.deployed_sites;
      contactLinks = res.links.contact_links;
    })
  })
