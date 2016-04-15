define([
    'backbone',
    'window',
    'polyglot'
], function(Backbone, window, Polyglot){

    return Backbone.Model.extend({
        defaults: {
            translateSetion:''
        },
        initialize: function(App) {

            this.app = App;

            window.eventBus.on('app:changeLang', function(){
            }, this);
        },

        loadLang: function(lang){

            var self = this;

            var loadedTranslate = self.get('loadedTranslate') || {};

            if (!loadedTranslate || !loadedTranslate[lang]){
                $.ajax({
                    method: "GET",
                    url: '/js/components/' + self.get('translateName') + '/translate/' + lang + '.json',
                    async: false,
                    timeout: 500,
                    success: function(data) {

                        self.get('polyglot').locale(lang);
                        self.get('polyglot').extend(data);

                        loadedTranslate[lang] = data;

                        self.set('loadedTranslate', loadedTranslate) ;
                        window.eventBus.trigger(self.get('translateTrigger'));

                    }
                });
            } else {
                self.get('polyglot').locale(lang);
                self.get('polyglot').extend(loadedTranslate[lang]);
                window.eventBus.trigger(self.get('translateTrigger'));

            }
        }
    });
});