(function() {
    var app = angular.module('app', ['ngRoute','ngFileUpload']);
    
    app.config(["$routeProvider", function ($router) {

        $router.when("/", { templateUrl: "angular/views/index.html"})
       .otherwise({ redirectTo: "/" });
    }]);
    
})();
