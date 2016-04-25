app.controller("igorController", function($scope, quoteService, $q){
    
    $scope.Quote = "Hello";
    
    $scope.getQuote = function(){
        $scope.Quote = quoteService.getQuote();
    };
    
    $scope.loadQuote = function (){
        quoteService.loadQuote().then(function(data){
            $scope.Quote = data;
        })
    }
    
})