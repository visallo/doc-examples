import { connect } from 'public/v1/api'
import { Component } from 'react'

const PREF_NAME = 'my-option-value'

class MyOption extends Component {
    render() {
        const { cy } = this.props;
        const myOptionDefault = visalloData.currentUser.uiPreferences[PREF_NAME];
        return (
            <label>My Setting
                <input
                    onChange={this.onChange}
                    type="checkbox"
                    defaultChecked={myOptionDefault} />
            </label>
        );
    }

    onChange(event) {
        const { checked } = event.target;
        visalloData.currentUser.uiPreferences[PREF_NAME] = checked;
        connect()
            .then(c => c.dataRequest('user', 'preference', PREF_NAME, checked))
            .then(() => console.log('saved'))
    }
}

export default MyOption
