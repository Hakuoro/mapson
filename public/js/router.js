// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'components/layout/LayoutView'
], function ($, _, Backbone, LayoutView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
          /*  'login-form(/)(:lang)' : 'showLogin',
            'dash(/)(:lang)'  : 'showDash',
            'logout(/)(:lang)'  : 'logout',
            'reg(/)(:lang)'  : 'reg',
            'profile(/)(:lang)'  : 'profile',
            'courses(/)(:lang)'  : 'courses',
            'course/add(/)(:lang)'  : 'courseAdd',
            'course/show/:course(/)(:lang)'  : 'courseShow',
            'course/edit/:course(/)(:lang)'  : 'courseEdit',*/
            // Default
            '(/)(:lang)': 'home'
        }
    });

    return {
        initialize: function (App) {


            var app_router = new AppRouter;

            var layout = new LayoutView(App);

            // default route
            app_router.on('route:home', function (lang) {

                layout.loadTranslation(lang);

            });


            Backbone.history.start();
        }
    };
});
