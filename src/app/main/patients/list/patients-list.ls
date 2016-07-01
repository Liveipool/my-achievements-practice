'use strict'
angular.module 'app.patients', []
  
.config ($state-provider)!->
  'ngInject'
  
  # $translate-partial-loader-provider.add-part 'app/main/patients'

  $state-provider.state 'app.patients.list', {
    url: '/patients/list'
    resolve: data: (api-resolver)-> api-resolver.resolve('patientsList@get')
    views:
      'content@app':
        template-url: 'app/main/patients/list/patients-list.html'
        controller-as: 'pl'
        controller: (data, $scope, $state, DT-options-builder, DT-column-builder, DT-column-def-builder)!->
          # $scope.hello-text = '病患列表，点击列表项，进入病患详情'
          pl = @
          @data = data
          @clickHandler = (data) ->
            $state.go 'app.patients.detail', {id:data[7], name:data[0]}
          @dt-options = DT-options-builder.new-options!
          .withDOM 'rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>'
          .with-column-filter do
            aoColumns:
              *sSelector:'#name-filter'
               type:'text'
               bSmart: true
              *null
              *null
              *null
              *sSelector:'#date-filter'
               type:'text'
               bSmart:true
              *null
              *null
              *null
          .with-pagination-type 'full_numbers'
          .with-option 'responsive' false
          .with-option 'auotWidth' false
          .with-option 'fnRowCallback' (n-row, a-data, i-display-index, i-display-index-full) ->
            $ 'td', n-row .unbind 'click'
            $ 'td', n-row .bind 'click', !~>
                $scope.$apply !-> pl.clickHandler a-data
            n-row
          @dt-column-defs =
            DT-column-def-builder.new-column-def 0
            DT-column-def-builder.new-column-def 7 .not-visible!
          @dt-columns = {}
          @dt-instance = {}
          # $log.log @dt-coslumn-defs
          # $log.log @dt-options

          
        
  }

.filter 'formatDateStr' -> (date-str)-> date-str.replace /T.+$/, ''







# angular.module('app.patients', []).config(function($stateProvider) {
#   'ngInject'
#   $stateProvider.state('app.patients.list', {
#     url: '/patients/list',
#     resolve: {
#       data: function (apiResolver) {
#         return apiResolver.resolve('patientsList@get');
#       }
#     },
#     views: {
#       'content@app': {
#         templateUrl: 'app/main/patients/list/patients-list.html',
#         controllerAs: 'pl',
#         controller: function(data, $scope, $state, $log, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder) {
#           var pl;
#           pl = this;
#           this.data = data;
#           this.clickHandler = function(data){
#             return $state.go('app.patients.detail', {
#               id: data[7],
#               name: data[0]
#             });
#           };
#           this.dtOptions = DTOptionsBuilder.newOptions().withDOM('rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>').withColumnFilter({
#             aoColumns: [
#               {
#                 sSelector: '#name-filter',
#                 type: 'text',
#                 bSmart: true
#               }, null, null, null, {
#                 sSelector: '#date-filter',
#                 type: 'text',
#                 bSmart: true
#               }, null, null, null
#             ]
#           }).withPaginationType('full_numbers').withOption('responsive', false).withOption('auotWidth', false).withOption('fnRowCallback', function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
#             var this$ = this;
#             $('td', nRow).unbind('click');
#             $('td', nRow).bind('click', function(){
#               $scope.$apply(function(){
#                 pl.clickHandler(aData);
#               });
#             });
#             return nRow;
#           });
#           this.dtColumnDefs = [DTColumnDefBuilder.newColumnDef(1), DTColumnDefBuilder.newColumnDef(5).notVisible()];
#           this.dtColumns = {};
#           this.dtInstance = {};
#           $log.log(this.dtColumnDefs);
#           $log.log(this.dtOptions);
#         }
#       }
#     }
#   });
# }).filter('formatDateStr', function(){
#     return function(dateStr){
#       return dateStr.replace(/T.+$/, '');
#     };
# });
