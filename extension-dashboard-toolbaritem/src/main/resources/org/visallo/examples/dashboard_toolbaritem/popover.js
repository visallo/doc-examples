define([
    'public/v1/api'
], function(api) {
    'use strict';

    return api.defineComponent(ExampleToolbarPopover);

    function ExampleToolbarPopover() {

        this.after('initialize', function() {
            this.$node.text('Example Popover');
        });

    }
});
