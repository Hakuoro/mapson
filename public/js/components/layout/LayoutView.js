define([
    'jquery',
    'underscore',
    'backbone',
    'window',
    'components/base/BaseView',
    'components/layout/LayoutModel',
    'text!components/layout/LayoutTemplate.html'
    // page view next

], function ($, _, Backbone, window, BaseView, LayoutModel, LayoutTemplate

) {
    return BaseView.extend({
        el: $("#page"),

        template: _.template(LayoutTemplate),

        initialize: function(App) {
            BaseView.prototype.initialize.apply(this, arguments);

            this.model = new LayoutModel(App);
        }

    });
});