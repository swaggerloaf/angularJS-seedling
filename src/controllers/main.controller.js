var MainController = function($scope, $log) {
  this.count = 0;
  this.name1 = "AngularJS!";
  this.increment = function increment() {
    this.count++;
  };
  this.decrement = function decrement() {
    this.count--;
  };

//  $scope.$watch('count', );
};

MainController.$inject = ['$scope', '$log'];

export default MainController;
