angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function ($scope) { })
.controller('SearchCtrl', function ($scope) { })
.controller('UploadCtrl', function ($scope) {
    $scope.camera = function () {
        var options = {
            quality: 100,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 480,
            targetHeight: 480,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA
        };

        navigator.camera.getPicture(onSuccess, onFail, options);

        function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
            image.src = imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    };
})
.controller('ActivityCtrl', function ($scope) { })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


