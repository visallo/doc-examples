import { Component } from 'react'

class ExampleText extends Component {
    render() {
        const { vertex, propertyName, propertyKey } = this.props;
        return (
            <dl>
                <dt>Name</dt>
                <dd><code>{propertyName}</code></dd>
                <dt>Key</dt>
                <dd><code>{propertyKey}</code></dd>
            </dl>
        )
    }
}

export default ExampleText

