angular.module('app.patients', []).config(function($stateProvider) {
  'ngInject'
  $stateProvider.state('app.patients.list', {
    url: '/patients/list',
    resolve: {
      data: function (apiResolver) {
        return apiResolver.resolve('patientsList@get');
      }
    },
    views: {
      'content@app': {
        templateUrl: 'app/main/patients/list/patients-list.html',
        controllerAs: 'pa',
        controller: function(data, $scope) {
          this.data = data;
        }
      }
    }
  });
});