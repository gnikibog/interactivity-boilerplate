
var App = Em.Application.create({});


/********
 * Data *
 ********/

App.store = DS.Store.create({
  revision: 4,
  adapter: DS.FixtureAdapter.create()
});


/***********************
 * Controllers & Views *
 ***********************/

App.ApplicationController = Em.Controller.extend({});
App.ApplicationView = Em.View.extend({
  templateName: 'application'
});


/**********
 * Router *
 **********/

App.Router = Em.Router.extend({
  root: Em.Route.extend({
    index: Em.Route.extend({
      route: '/'
    })
  })
});

App.initialize();