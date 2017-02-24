define(['public/v1/api', 'react'], function(api, React) {

    const PREF_NAME = 'my-option-value'

    const MyOption = React.createClass({
        render() {
            const { cy } = this.props;
            const myOptionDefault = visalloData.currentUser.uiPreferences[PREF_NAME];
            return (
                <label>My Setting
                    <input
                        onChange={this.onChange}
                        type="checkbox"o
                        defaultChecked={myOptionDefault} />
                </label>
            );
        },
        onChange(event) {
            const { checked } = event.target;
            visalloData.currentUser.uiPreferences[PREF_NAME] = checked;
            api.connect()
                .then(c => c.dataRequest('user', 'preference', PREF_NAME, checked))
                .then(() => console.log('saved'))
        }
    })
    return MyOption;
})
