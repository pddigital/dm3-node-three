angular.module('nodeThree')
.controller('homeCtrl', function($scope, gameService){

  $scope.games = [];
  $scope.getGames = ()=> {
    gameService.getGames()
            .then((games) => {
              $scope.games = games.data;
            });
  }
  $scope.getGames();

})
