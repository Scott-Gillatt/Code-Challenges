app.factory("quoteService", function ($http, $q){
    // var quote = "";
    var serivce = {
        // getQuote: function (){
        //     return quote;
        // },
        loadQuote: function (){
            var deferred = $q.defer();
            $http.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
            .success(function(data){
                // quote = data[0]
                deferred.resolve(data[0])
            })
            .error(function(data , status){
                //handle the error
                deferred.resolve(data[0])
                return status;
            })
            return deferred.promise
        }
    }
    return serivce;
})