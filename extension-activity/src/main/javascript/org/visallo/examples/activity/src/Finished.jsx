import { Component } from 'react'

class Finished extends Component {

    render() {
        return <button onClick={this.onClick} className="btn btn-mini">Test</button>
    }

    onClick = () => {
        alert(JSON.stringify(this.props.process, null, 2));
    }
}

export default Finished
