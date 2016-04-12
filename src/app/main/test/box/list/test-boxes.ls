angular.module 'app.test', []

  .config ($state-provider, $translate-partial-loader-provider, ms-navigation-service-provider)!->
    

    $state-provider.state 'app.test.boxes', {
      url: '/test/boxes'
      # resolve: boxes: (api-resolver)-> api-resolver.resolve('testBoxes@get')
      views:
        'content@app':
          template-url: 'app/main/test/box/list/test-boxes.html'
          # controller: (boxes, $scope)!->
          controller: ($scope)!->
            # console.log "boxes: ", boxes
    }

