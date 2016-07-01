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
        controller: function(data, $scope, $state, $log, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder) {
          var pl;
          pl = this;
          this.data = data;
          this.clickHandler = function(data){
            return $state.go('app.patients.detail', {
              id: data[7]
            });
          };
          this.dtOptions = DTOptionsBuilder.newOptions().withDOM('rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>').withColumnFilter({
            aoColumns: [
              {
                sSelector: '#name-filter',
                type: 'text',
                bSmart: true
              }, null, null, null, {
                sSelector: '#date-filter',
                type: 'text',
                bSmart: true
              }, null, null, null
            ]
          }).withPaginationType('full_numbers').withOption('responsive', false).withOption('auotWidth', false).withOption('fnRowCallback', function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
            var this$ = this;
            $('td', nRow).unbind('click');
            $('td', nRow).bind('click', function(){
              $scope.$apply(function(){
                pl.clickHandler(aData);
              });
            });
            return nRow;
          });
          this.dtColumnDefs = [DTColumnDefBuilder.newColumnDef(0), DTColumnDefBuilder.newColumnDef(7).notVisible()];
          this.dtColumns = {};
          this.dtInstance = {};
          $log.log(this.dtColumnDefs);
          $log.log(this.dtOptions);
        }
      }
    }
  });
}).filter('formatDateStr', function(){
    return function(dateStr){
      return dateStr.replace(/T.+$/, '');
    };
});




// 'use strict';
// angular.module('app.patients', []).config(function($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider){
//   'ngInject';
//   $translatePartialLoaderProvider.addPart('app/main/patients');
//   $stateProvider.state('app.patients', {
//     url: '/patients',
//     resolve: {
//       result: function(apiResolver){
//         return apiResolver.resolve('patients@get');
//       }
//     },
//     views: {
//       'content@app': {
//         templateUrl: 'app/main/patients/patients.html',
//         controllerAs: 'vm',
//         controller: function(result, $scope, $state, $log, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder){
//           var vm;
//           vm = this;
//           this.patients = result.data;
//           this.clickHandler = function(data){
//             return $state.go('app.patients-detail', {
//               id: data[7]
//             });
//           };
//           this.dtOptions = DTOptionsBuilder.newOptions().withDOM('rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>').withColumnFilter({
//             aoColumns: [
//               {
//                 sSelector: '#name-fileter',
//                 type: 'text',
//                 bSmart: true
//               }, null, null, null, {
//                 sSelector: '#date-fileter',
//                 type: 'text',
//                 bSmart: true
//               }, null, null, null
//             ]
//           }).withPaginationType('simple').withOption('responsive', false).withOption('auotWidth', false).withOption('fnRowCallback', function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
//             var this$ = this;
//             $('td', nRow).unbind('click');
//             $('td', nRow).bind('click', function(){
//               $scope.$apply(function(){
//                 vm.clickHandler(aData);
//               });
//             });
//             return nRow;
//           });
//           this.dtColumnDefs = [DTColumnDefBuilder.newColumnDef(0), DTColumnDefBuilder.newColumnDef(7).notVisible()];
//           this.dtColumn = {};
//           this.dtInstance = {};
//           $log.log(this.dtColumnDefs);
//           $log.log(this.dtOptions);
//         }
//       }
//     }
//   });
// }).filter('formatDateStr', function(){
//   return function(dateStr){
//     return dateStr.replace(/T.+$/, '');
//   };
// });


