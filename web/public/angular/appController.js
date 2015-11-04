(function() {
    //inject angular file upload directives and services.
    var app = angular.module('app');

    app.controller('MyCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
        $scope.uploadFiles = function(file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: 'http://localhost:3000/',
                    data: {file: file}
                });

                file.upload.then(function (response) {
                    alert("Descarga exitosa dice angular");
                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 * 
                                             evt.loaded / evt.total));
                });
            }   
        }
    }]);
    
})();