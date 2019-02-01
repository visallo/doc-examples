import { Component } from 'react'

class GraphViewExample extends Component {
    render() {
        return (
            <div>
                Custom palette
                <div className="btn-toolbar">
                    <div className="btn-group">
                        <button className="btn btn-mini">A</button>
                        <button className="btn btn-mini">B</button>
                        <button className="btn btn-mini">C</button>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-mini">D</button>
                        <button className="btn btn-mini">E</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GraphViewExample;
