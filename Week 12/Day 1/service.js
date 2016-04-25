app.factory("AppService", function ($http, $q){
    
    var service = {
    
        loadKitty: function (){
            var deferred = $q.defer();
            $http.get("http://thecatapi.com/api/images/get.php")
            .success(function(data){
                deferred.resolve(data)
            })
            // return deferred.promise;
            return "http://thecatapi.com/api/images/get.php";
        }
    }
        return service;
    
    
})

