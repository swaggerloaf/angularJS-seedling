const MainController = function($scope) {
  $scope.count = 5;

  $scope.increment = function increment() {
    $scope.count++;
  };
  $scope.decrement = function decrement() {
    $scope.count--;
  };


};

MainController.$inject = ['$scope'];

export default MainController;
