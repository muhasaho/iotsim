// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
//.config(function($stateProvider, $urlRouterProvider){
//  $stateProvider
//  .state('home', {
//      url: '/settings',
//      templateUrl: 'templates/settings.html',
//      controller: 'SettingsCtrl'
//    });
//})

.controller('MainCtrl', function($scope, $firebaseArray){
  var ref = new Firebase("https://nohuman.firebaseio.com/");
    
  $scope.messages = $firebaseArray(ref);
  
  $scope.toaster = function(){
    console.log("toaster");
    
    $scope.messages.$add({
      title: "Toaster",
      body: "Your toast is ready!",
      time: Date(),
      mycss: "panel-primary"
    });
  };
  
  $scope.fitbit = function(){
    console.log("fitbit");
    
    $scope.messages.$add({
      title: "Fitbit",
      body: "You met your walking goals",
      time: Date(),
      mycss: "panel-success"
    });
  };
  
  $scope.ac = function(){
    console.log("ac");
    
    $scope.messages.$add({
      title: "Air Conditioner",
      body: "I'm going to sleep to conserve power",
      time: Date(),
      mycss: "panel-info"
    });
  };
  
  $scope.dogFeeder = function(){
    console.log("dog feeder");
    
    $scope.messages.$add({
      title: "Dog Feeder",
      body: "Running out of dog food",
      time: Date(),
      mycss: "panel-danger"
    });
  };
  
  $scope.garageDoor = function(){
    console.log("garage door");
    
    $scope.messages.$add({
      title: "Garage Door",
      body: "Door Opening",
      time: Date(),
      mycss: "panel-warning"
    });
  };
  
  $scope.clear = function(){
    angular.forEach($scope.messages, function(value, key){
      $scope.messages.$remove(key);
    });
  }
  
});
