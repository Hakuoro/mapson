define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    return Backbone.View.extend({
        section:'',

        initialize: function(App) {
            this.app = App;

            this.listenTo(App, this.section + ':changeLang', function(){
                this.render();
            });
        },
        loadTranslation: function(lang){
            this.app.loadTranslation(this.section, this.app.checkLang(lang));
        },
        render: function () {
            this.$el.html(this.template(this.model.attributes));
        },
        innerRender: function(el, lang){
            this.$el = el;
            this.delegateEvents();
            this.loadTranslation(lang);
        }
    });
});