define(['create-react-class'], function(createReactClass) {
    'use strict';

    const VisibilityEditor = createReactClass({
        getDefaultProps() {
            return { value: '', placeholder: i18n('visibility.label') }
        },

        getInitialState() {
            return { value: this.props.value, valid: true }
        },

        componentWillReceiveProps({ value }) {
            if (value !== this.state.value) {
                this.setState({ value, valid: this.checkValid(value) })
            }
        },

        render() {
            const { value: oldValue, placeholder, readonly } = this.props;
            const { value, valid } = this.state;

            return (
                <input
                    type="text"
                    onChange={this.onChange}
                    value={value}
                    placeholder={placeholder}
                    className={valid ? '' : 'invalid'} />
            )
        },

        onChange(event) {
            const value = event.target.value;
            const valid = this.checkValid(value)
            this.setState({ value, valid })
            this.props.visibilitychange({ value, valid })
        },

        checkValid(value) {
            var authorizations = this.props.authorizations;
            return Boolean(!value.length || value in authorizations);
        }
    });

    return VisibilityEditor;
});