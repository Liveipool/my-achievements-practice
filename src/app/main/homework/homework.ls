'use strict'

angular.module 'app.homework', [] .config ($state-provider) ->
	$state-provider.state 'app.homework', { abstract: true }