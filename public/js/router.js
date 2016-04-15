// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'socketClient',
    'components/container/ContainerView',
    'components/menu/top/MenuView',
    'components/footer/FooterView',
    'window',
    'libs/js.cookie'
], function ($, _, Backbone, SocketClient, ContainerView,  MenuView, FooterView, window, Cookies) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'login-form(/)(:lang)' : 'showLogin',
            'dash(/)(:lang)'  : 'showDash',
            'logout(/)(:lang)'  : 'logout',
            'reg(/)(:lang)'  : 'reg',
            'profile(/)(:lang)'  : 'profile',
            'courses(/)(:lang)'  : 'courses',
            'course/add(/)(:lang)'  : 'courseAdd',
            'course/show/:course(/)(:lang)'  : 'courseShow',
            'course/edit/:course(/)(:lang)'  : 'courseEdit',
            // Default
            '(/)(:lang)': 'home'
        }
    });

    return {
        initialize: function (App) {


            var app_router = new AppRouter;


            // default route
            app_router.on('route:home', function (lang) {


            });


            Backbone.history.start();
        }
    };
});
