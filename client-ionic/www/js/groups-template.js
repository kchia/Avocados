angular.module('boundless.group-template', ['ionic'])


.controller('GroupTemplateController', function($scope, $timeout, $ionicModal, $ionicSideMenuDelegate) {

  $scope.groups = [];

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-group.html', function(modal) {
    $scope.groupModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createGroup = function(group) {
    $scope.groups.push({
      title: group.title
    });
    $scope.groupModal.hide();
    group.title = "";
  };

  // Open our new group modal
  $scope.newGroup = function() {
    $scope.groupModal.show();
  };

  // Close the new group modal
  $scope.closeNewGroup = function() {
    $scope.groupModal.hide();
  };

});