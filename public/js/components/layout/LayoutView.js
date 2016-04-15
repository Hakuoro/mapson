define([
    'jquery',
    'underscore',
    'backbone',
    'window',
    'components/base/BaseView',
    'components/layout/LayoutModel',
    'text!components/layout/LayoutTemplate.html',
    // page view next
    'components/topmenu/MenuView',

], function ($, _, Backbone, window, BaseView, LayoutModel, LayoutTemplate,
             MenuView

) {
    return BaseView.extend({

        section:'layout',

        el: $(".layout"),

        template: _.template(LayoutTemplate),

        initialize: function(App) {
            BaseView.prototype.initialize.apply(this, arguments);
            this.model = new LayoutModel({app:App});

            this.topMenuView = new MenuView(App);




         /*   this.listenTo(App, this.topMenuView.section + ':changeLang', function(){
                this.topMenuView.render()
            });*/
        },

        render: function () {
            BaseView.prototype.render.apply(this, arguments);

            this.topMenuView.$el = this.$('.top-menu');
            this.topMenuView.delegateEvents();
            this.topMenuView.loadTranslation(this.app.lang);

            //this.topMenuView.render();
        }
    });
});