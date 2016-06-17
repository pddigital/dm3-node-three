angular.module('nodeThree')
.factory('gameService', function($http, url){

  return {

    getGames() {
        return $http.get(`/api/video-games`);
    }

  }

})
