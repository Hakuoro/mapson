// Filename: app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'polyglot',
    'window'
], function ($, _, Backbone, Router, Polyglot, window) {

    var app =  {

        polyglot:{},
        defaultLang:'ru',
        allowedLang : {ru:'ru', en:'en'},
        translates:[],

        initialize: function () {

            this.lang = this.getLang();

            this.poly  = new Polyglot({locale: this.lang});

            Router.initialize(this);
        },


        loadTranslation: function(section, lang){

            if (!this.allowedLang[lang])
                return false;

            var self = this;

            if (this.translates[section] && this.translates[section][lang] ){

                    this.poly.locale(lang);
                    this.poly.extend(this.translates[section][lang]);
                    self.setLang(lang);

                    this.trigger(section + ':changeLang');

            } else {

                $.when($.getJSON('/js/components/'+section+'/translate/' + lang + '.json'))
                    .then(function(data) {

                        if (!self.translates[section]){
                            self.translates[section] = [];
                        }

                        self.poly.locale(lang);
                        self.poly.extend(data);
                        self.translates[section][lang] = data;
                        self.setLang(lang);

                        self.trigger(section + ':changeLang');
                    });

            }


            return this;
        },

        checkLang: function(lang){

            if (this.allowedLang[lang])
                return lang;


            return this.defaultLang;
        },

        getLang: function() {
            var lang = window.localStorage.getItem('lang');

            if (lang == 'null' || lang == null ){
                this.setLang(this.defaultLang);
                return this.defaultLang;
            }

            return lang;
        },

        setLang: function(lang) {
            lang = lang || this.defaultLang;

            if (this.allowedLang[lang] ){
                window.localStorage.setItem('lang', lang);
                this.lang = lang;
            }
        }
    };

    _.extend(app, Backbone.Events);

    return app;
});
