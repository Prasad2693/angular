app.controller("loginController",loginController);
loginController.$inject=["$scope","loginService"];
function loginController($scope,loginService)
{
    loginService.authenticate = function (data) {
        
    };
    $scope.login=function(data){
        loginService.authenticate(data).then(function(response){
            console.log(response);
        });
    }
}