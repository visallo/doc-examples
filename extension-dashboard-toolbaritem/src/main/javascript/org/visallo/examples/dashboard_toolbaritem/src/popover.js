import { defineComponent } from 'public/v1/api'

export default defineComponent(ExampleToolbarPopover);

function ExampleToolbarPopover() {

    this.after('initialize', function() {
        this.$node.text('Example Popover');
    });

}

