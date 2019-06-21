import { Component } from 'react'

class MenubarExamplePane extends Component {
    render() {
        return (
            <div style={{padding: '1em'}}>
                Example Panel

                <button
                    style={{display: 'block', width: '100%'}}
                    className="btn">Example</button>
            </div>
        )
    }
}

export default MenubarExamplePane
