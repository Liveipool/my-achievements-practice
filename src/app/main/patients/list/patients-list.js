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
        controllerAs: 'pl',
        controller: function(data, $scope) {
          this.data = data;
        // console.log(data.data[0]);
          this.dtOptions = {
            dom       : 'rt<"bottom"<"right"<"info"i><"pagination"p>>>',
            // pagingType: 'simple',
            // autoWidth : false,
            // responsive: true
          }
        }
      }
    }
  });
});

        // vm.dtOptions = {
            // dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
        //     pagingType: 'simple',
        //     autoWidth : false,
        //     responsive: true
        // };