var myApp = angular.module('imageuploadFrontendApp', ['ngResource']);
myApp.config(function($resourceProvider){
    $resourceProvider.defaults.stripTrailingSlashes = false; //for django rest to work we need a slash in the end of url
});

myApp.controller('MainCtrl', function($scope, Images){
    console.log('In Main Ctrl');

    $scope.images = Images.query(); //always use a get request and will return a list of images
    $scope.newImage = {};
    $scope.uploadImage =function()
    {
        console.log("upload image called");
        Images.save($scope.newImage).$promise.then(
            function(response){
                $scope.images.unshift(response);
            }
        );
    };
});

myApp.directive('filesModel', filesModelDirective);