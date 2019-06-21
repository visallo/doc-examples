define(['public/v1/api'], function({defineComponent}) {
    return defineComponent(Example);

    function Example() {
        this.after('initialize', function() {
            this.$node.textContent = 'Hello World';
        })
    }
});
