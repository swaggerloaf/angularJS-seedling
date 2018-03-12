const MainController = function($scope, $log) {
  $scope.count = 5;

  $scope.increment = function increment() {
    $scope.count++;
  };
  $scope.decrement = function decrement() {
    $scope.count--;
  };


};

MainController.$inject = ['$scope', '$log'];

export default MainController;
