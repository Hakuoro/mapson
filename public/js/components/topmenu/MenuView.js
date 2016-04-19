define([
    'jquery',
    'underscore',
    'backbone',
    'window',
    'components/base/BaseView',
    'components/topmenu/MenuModel',
    'text!components/topmenu/MenuTemplate.html'

], function ($, _, Backbone, window, BaseView, MenuModel, MenuTemplate

) {
    return BaseView.extend({
        section:'topmenu',

        events: {
            "change .lang-selector": "changeLang"
        },

        template: _.template(MenuTemplate),

        initialize: function(App) {
            BaseView.prototype.initialize.apply(this, arguments);

            this.model = new MenuModel({app:App});
        },

        changeLang: function (){
            var lang = this.$('.lang-selector').val();
            this.app.trigger('App:changeLang', lang);
        }
    });
});