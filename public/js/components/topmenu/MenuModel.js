define([
    'backbone',
    'components/base/BaseModel'
], function(Backbone, BaseModel){

    return BaseModel.extend({
        url:'/api/menu',
        initialize: function(App) {
            this.fetch();
        }
    });
});