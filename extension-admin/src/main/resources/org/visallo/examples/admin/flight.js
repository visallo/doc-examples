define([
    'flight/lib/component',
    './flight-template.hbs'
], function(
    defineComponent,
    template) {
    'use strict';

    return defineComponent(FlightAdminExample);

    function FlightAdminExample() {

        this.after('initialize', function() {
            this.$node.html(template({}));
        });

    }
});
