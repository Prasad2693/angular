// app.config("config");
// config.$inject=["$stateProvider","$urlRouterProvider"];
// function config($stateProvider,$urlRouterProvider) {
//     $urlRouterProvider.otherwise("/login");
//
//     $stateProvider.state("login",{
//         url:"/login",
//         templateUrl:"templates/login.html",
//         controller:"loginController"
//     });
// }

  app.config("config");
 config.$inject=["$stateProvider","$urlRouterProvider"];
 function config($stateProvider,$urlRouterProvider) {
     $urlRouterProvider.otherwise("/login");

     $stateProvider.state("login", {
         url: "/login",
         templateUrl: "templates/login.html",
         controller: "loginController"
     });
 }