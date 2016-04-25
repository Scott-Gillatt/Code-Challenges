app.controller("AppController", function ($scope, AppService, $timeout, $interval){
    $scope.kitty = {url: "https://www.care.com/img/cms/web/content/articlephotos/2015/09-sept/img-article-kitten-care-12-things-to-know-about-bringing-home-a-new-little-kitty.jpg"}
    
    
    
    $scope.loadKitty = function(){ $interval($scope.kitty(), 5000, 2)}
   
    $scope.kitty = function (){
        $scope.kitty.url = AppService.loadKitty()
    }
    
})
    
    
//     $scope.loadKitty = function (){
//         $timeout(function(){$scope.kitty.url = AppService.loadKitty()},1000)
//     }
    
// })

// .then(function(data){
//             $scope.kitty.url = "http://images2.fanpop.com/image/photos/9100000/kitty-kitties-9109284-500-460.jpg";
//         })