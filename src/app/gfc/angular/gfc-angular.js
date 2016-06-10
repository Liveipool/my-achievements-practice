(function(){
  'use strict';
  angular.module('gfc', []).directive('gfcForm', function(){
    return {
      link: {
        pre: function(scope, element, attrs){
          scope.schemaName = attrs.schemaName;
          return console.log("gfcForm directive rendered, schema-name: ", scope.schemaName);
        }
      }
    };
  }).directive('gfcWidget', function(gfcFormService){
    return {
      require: 'ngModel',
      link: {
        pre: function(scope, element, attrs, ngModelController){
          scope.vm.gfcErrors = {};
          return ngModelController.$validators.gfcValidator = gfcFormService.getValidator(scope.schemaName, attrs.propertyName, ngModelController, scope);
        }
      }
    };
  }).directive('gfcWidgetAutocomplete', function(gfcFormService){
    return {
      controllerAs: 'ctrl',
      bindToController: true,
      controller: function($timeout, $q, $scope, $attrs){
        var self;
        self = this;
        this.init = function(){
          this.options = this.loadAll();
          this.selectedItem = null;
          return this.searchText = null;
        };
        this.querySearch = function(query){
          var results, deferred;
          results = query
            ? self.options.filter(self.createFilterFor(query))
            : self.options;
          deferred = $q.defer();
          $timeout(function(){
            return deferred.resolve(results);
          }, Math.random() * 1000, false);
          return deferred.promise;
        };
        this.loadAll = function(){
          var options;
          options = gfc.schemas[$scope.schemaName].properties[$attrs.propertyName]['enum'];
          return options.map(function(it){
            return {
              value: it,
              display: it
            };
          });
        };
        this.createFilterFor = function(query){
          return function(state){
            return state.value.indexOf(angular.lowercase(query)) === 0;
          };
        };
        return this.init();
      }
    };
  }).service('gfcFormService', function(){
    var ajv, getAjvValidateFn;
    ajv = Ajv({
      allErrors: true
    });
    getAjvValidateFn = function(schema, propertyName){
      var subSchema;
      subSchema = {
        properties: _.pick(schema.properties, propertyName)
      };
      if (schema.required != null && in$(propertyName, schema.required)) {
        subSchema.required = [propertyName];
      }
      return ajv.compile(subSchema);
    };
    return {
      getValidator: function(schemaName, propertyName, ngModelController, scope){
        var validateFn;
        validateFn = getAjvValidateFn(gfc.schemas[schemaName], propertyName);
        return function(value){
          var isValid, ref$;
          if (isValid = validateFn((ref$ = {}, ref$[propertyName + ""] = value, ref$))) {
            ngModelController.$setValidity('GFC', true);
          } else {
            ngModelController.$setValidity('GFC', false);
            scope.vm.gfcErrors[propertyName] = ajv.errorsText(validateFn.errors);
          }
          return isValid;
        };
      }
    };
  });
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);
