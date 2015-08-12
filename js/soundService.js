var app = angular.module("sounder");

app.service("soundService", function($http){

    this.getUser = function(username){
        return $http.get('http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e').then(function(res){
            return res.data;
        })
    }
})