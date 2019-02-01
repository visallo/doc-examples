import { Component } from 'react'

class ReactConfigExample extends Component {
    render() {
        return (
            <button style={{display: 'block'}}
                className="btn"
                onClick={this.onClick}>Increment</button>
        )
    }

    onClick = () => {
        const { item, extension } = this.props;
        const { configuration:previous } = item;
        const configuration = { ...previous, count: (previous.count || 0) + 1 };

        this.props.configurationChanged({
            item: { ...item, configuration },
            extension
        })
    }
}

export default ReactConfigExample
