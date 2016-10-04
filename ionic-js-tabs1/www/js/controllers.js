angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function ($scope, Posts) {
    Posts.all().success(function (data) {
        $scope.posts = data;
        console.log(data);
    });
})
.controller('SearchCtrl', function ($scope) { })
.controller('UploadCtrl', function ($scope, $state, Posts) {
    $scope.imgURI = "";
    $scope.data = {};
    $scope.shoot = function () {
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
            $scope.imgURI = imageURI;
        }
        function onFail(message) {
            alert('Failed because: ' + message);
        }
    };

    $scope.picker = function () {
        var options = {
            quality: 100,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            maximumImagesCount: 1
        };

        window.imagePicker.getPictures(
            function onSuccess(imageURI) {
                var image = document.getElementById('myImage');
                image.src = imageURI[0];
                $scope.imgURI = imageURI[0];
            },
            function (error) {
                console.log('Error: ' + error);
            },
            options
        );
    };

    $scope.post = function () {
        $state.go('tab.dash', {}, {reload: true});
    };

    $scope.isPick = function () {
        return $scope.imgURI !== "";
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

.controller('AccountCtrl', function($scope, Posts) {
    $scope.posts = Posts.all();
});


