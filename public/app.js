var counter = angular.module('counter', []);

counter.controller('counterController', function($scope, $http ,$timeout) {
    $scope.counter = {};
    // For Auto Updating.
    //$scope.reload = function () {
    // $http.get('/counter').
    //     success(function (data) {
    //       $scope.counter.value1 = data.counter1
    //       $scope.counter.value2 = data.counter2
    //   });
    //
    // $timeout(function(){$scope.reload()}, time)
    //
    // };
    // $scope.reload();
    
    $http.get('/')
        .success(function(data) {
             $http.get('/counter')
             .success(function(data) {
                $scope.counter.value1 = data.counter1
                $scope.counter.value2 = data.counter2
            })
            .error(function(data) {
                console.log('Error: ' + data)
            });
        })
        .error(function(data) {
            console.log('Error: ' + data)
        });

  $scope.addCounter1 = function() {
        if (confirm('You are adding a value to Counter 1')) {
        $scope.addCounter1Btn = true;
        $http.get('/add/counter1')
            .success(function(data) {
              $scope.counter.value1 = data.counter1
              $scope.counter.value2 = data.counter2
              $scope.addCounter1Btn = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
          }
  };

  $scope.subCounter1 = function() {
          if (confirm('You are decreasing a value from Counter 1')) {
          $scope.subCounter1Btn = true;
          $http.get('/sub/counter1')
              .success(function(data) {
                $scope.counter.value1 = data.counter1
                $scope.counter.value2 = data.counter2
                $scope.subCounter1Btn = false;
              })
              .error(function(data) {
                  console.log('Error: ' + data);
              });
            }
  };

  $scope.addCounter2 = function() {
            if (confirm('You are adding a value to Counter 2')){
            $scope.addCounter2Btn = true;
            $http.get('/add/counter2')
                .success(function(data) {
                  $scope.counter.value1 = data.counter1
                  $scope.counter.value2 = data.counter2
                  $scope.addCounter2Btn = false;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
              }
  }

  $scope.subCounter2 = function() {
            if (confirm('You are decreasing a value from Counter 2')) {
            $scope.subCounter2Btn = true;
            $http.get('/sub/counter2')
                .success(function(data) {
                  $scope.counter.value1 = data.counter1
                  $scope.counter.value2 = data.counter2
                  $scope.subCounter2Btn = false;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
              }
  };;
});
