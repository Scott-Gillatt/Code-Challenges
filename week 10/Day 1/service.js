app.factory('TestService', function () {
  
    var service = {
        getPeople: function () {
            return ["Scott", "Colin", "Igor", "Dave", "Ken", "Matt"];
        }
    }
    return service;
    
});