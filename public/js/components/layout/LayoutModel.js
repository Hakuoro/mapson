define([
    'backbone',
    'components/base/BaseModel'
], function(Backbone, BaseModel){

    return BaseModel.extend({

        initialize: function(App) {
            BaseModel.prototype.initialize.apply(this, arguments);
        }
    });
});