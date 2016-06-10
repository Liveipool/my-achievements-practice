(function(){
  'use strict';
  var Page, slice$ = [].slice;
  window.GFCPage = Page = (function(){
    Page.displayName = 'Page';
    var prototype = Page.prototype, constructor = Page;
    Page.appMainFolder = 'app/main/';
    Page.modules = ['app.core', 'app.navigation', 'app.toolbar', 'app.quick-panel', 'app.auth.login', 'app.auth.lock'];
    Page.services = {};
    function Page(arg$){
      var module, ref$, i$;
      module = arg$.module, this.menu = arg$.menu, this.service = arg$.service;
      this.spec = module;
      this.stateName = this.fullModuleName = this.spec.name;
      ref$ = this.stateName.split('.'), this.modulePath = 0 < (i$ = ref$.length - 1) ? slice$.call(ref$, 0, i$) : (i$ = 0, []), this.moduleName = ref$[i$];
      this.addModule();
      this.addViewModel();
      this.addMenuItem();
      this.addService();
    }
    Page.prototype.addModule = function(){
      var defaultDependencies;
      defaultDependencies = ['gfc'];
      this.module = angular.module(this.fullModuleName, defaultDependencies.concat(this.spec.dependencies || []));
      return this.constructor.modules.push(this.fullModuleName);
    };
    Page.prototype.addViewModel = function(){
      var this$ = this;
      return this.module.config(function($stateProvider, $translatePartialLoaderProvider){});
    };
    Page.prototype.addViewModel = function(){
      var this$ = this;
      return this.module.config(function($stateProvider, $translatePartialLoaderProvider){
        'ngInject';
        if (this$.spec.translation) {
          $translatePartialLoaderProvider.addPart(this$.constructor.appMainFolder + this$.spec.translation);
        }
        $stateProvider.state(this$.stateName, this$.getViewModel());
      });
    };
    Page.prototype.getViewModel = function(){
      var vm, this$ = this;
      vm = {
        url: '/' + this.moduleName,
        bodyClass: this.moduleName,
        views: this.getViews()
      };
      if (this.service != null) {
        vm.resolve = {
          data: function(apiResolver){
            return apiResolver.resolve(this$.service.name + "@get");
          }
        };
      }
      return vm;
    };
    Page.prototype.getViews = function(){
      return {
        'content@app': {
          templateUrl: this.getTemplateUrl(),
          controllerAs: 'vm',
          controller: this.spec.controller
        }
      };
    };
    Page.prototype.getTemplateUrl = function(){
      if (this.spec.templateUrl) {
        return this.spec.templateUrl;
      } else {
        return this.constructor.appMainFolder + this.moduleName + '/' + this.moduleName + '.html';
      }
    };
    Page.prototype.addMenuItem = function(){
      var this$ = this;
      if (this.menu != null) {
        return this.module.config(function(msNavigationServiceProvider){
          'ngInject';
          var itemName;
          itemName = (this$.menu.group != null ? this$.menu.group + '.' : '') + this$.moduleName;
          msNavigationServiceProvider.saveItem(itemName, {
            title: this$.menu.title,
            image: this$.menu.image,
            state: this$.stateName,
            weight: this$.menu.weight || 1
          });
        });
      }
    };
    Page.prototype.addService = function(){
      var ref$;
      if (((ref$ = this.service) != null ? ref$.data : void 8) != null) {
        return this.constructor.services[this.service.name] = this.service;
      }
    };
    return Page;
  }());
}).call(this);
