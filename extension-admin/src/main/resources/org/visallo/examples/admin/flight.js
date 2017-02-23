define([
    'flight/lib/component',
    'hbs!./flight-template'
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
