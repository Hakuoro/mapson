// Filename: app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'window',
    'polyglot',
    'libs/js.cookie'
], function ($, _, Backbone, Router, window, Polyglot, Cookies) {

    return {

        polyglot:{},
        lang:'ru',
        defaultLang:'ru',
        allowedLang : {ru:'ru', en:'en'},
        loadedCommonTranslate:{},

        initialize: function () {

            var self = this;

            this.lang = this.getLang();

            this.polyglot  = new Polyglot({locale: this.lang});

            window.eventBus = _.clone(Backbone.Events);

            Router.initialize(self);

            /*$.when($.getJSON('/translate/common/' + this.lang + '.json'))
            .then(function(data) {

                self.loadedCommonTranslate[self.lang] = data;
                self.polyglot.extend(data);

            });*/
        },

        changeLang: function(lang) {
            var self = this;
            this.setLang(lang);

            if (self.loadedCommonTranslate && self.loadedCommonTranslate[lang]){

                self.polyglot.locale(lang);
                self.polyglot.extend(self.loadedCommonTranslate[lang]);
                self.lang = lang;
                window.eventBus.trigger('app:changeLang');

            } else {

                $.when($.getJSON('/assets/translate/common/' + lang + '.json'))
                    .then(function(data) {
                        self.polyglot.locale(lang);
                        self.polyglot.extend(data);
                        self.loadedCommonTranslate[lang] = data;
                        self.lang = lang;
                        window.eventBus.trigger('app:changeLang');
                    });

            }
        },

        getLang: function() {
            var lang = window.localStorage.getItem('lang');


            if (lang == 'null' || lang == null ){
                this.setLang(this.defaultLang);
                return this.defaultLang;
            }

            return lang;
        },

        setLang: function(value) {
            window.localStorage.setItem('lang', value);
        },

        checkLocale: function(lang){
            lang = lang || this.defaultLang;

            if (this.allowedLang[lang]  && this.lang != lang ){
                this.changeLang(lang);
            }
        }

    };
});
