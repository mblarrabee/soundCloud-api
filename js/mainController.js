angular.module("sounder").controller("mainController", function($scope, soundService, $sce){

    
    $scope.getData = function(){
        soundService.getUser($scope.searchText).then(function(res){
            $scope.userData = res;
        })
    }
    
    $scope.play = function(track_url){
          SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
          $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
        });       
    }

})
        
