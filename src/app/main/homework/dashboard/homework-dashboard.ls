'use strict'

angular.module 'app.homework.dashboard', ['app.homework']

.config ($state-provider, $translate-partial-loader-provider, ms-navigation-service-provider) !->
	'ngInject'
	$state-provider.state 'app.homework.dashboard', {
		url: '/homework/dashbord'
		views:
			'content@app':
				template-url: 'app/main/homework/dashboard/homework-dashboard.html'
				controller: !->
					console.log "hello"
	}

