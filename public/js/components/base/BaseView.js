define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    return Backbone.View.extend({
        initialize: function(App) {
            this.app = App;

            window.eventBus.on('app:changeLang', function(){
                this.render();
            }, this);

        },
        render: function () {
            this.$el.html(this.template(this.model.attributes));
        }
    });
});