angular.module('app.patients').config(function($stateProvider) {
	$stateProvider.state('app.patients.detail', {
		url: '/patients/detail/?id?name',
		resolve: {
			detail: function(apiResolver) {
				return apiResolver.resolve('patientsDetail@get');
			}
		},
		views: {
			'content@app': {
				templateUrl: 'app/main/patients/detail/patients-detail.html',
				controllerAs: 'pd',
				controller: function(detail, $scope, $stateParams){
					this.detail = detail;
					this.name = $stateParams.name;
					// console.log('hahhahah '+ detail.acography.xiaorongs[0].danganNum);
				}
			}
		}
	});
});