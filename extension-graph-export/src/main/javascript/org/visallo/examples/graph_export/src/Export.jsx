import { Component } from 'react'

class Export extends Component {
    render() {
        const { workspaceId, productId, cy } = this.props;
        return (
            <div class="org-visallo-examples-graph_export">
                <pre>{ JSON.stringify(cy.json(), null, 2) }</pre>
                <code>workspaceId = {workspaceId}</code>
                <code>productId = {productId}</code>
                <button class="btn btn-primary">Export</button>
            </div>
        )
    }
}

export default Export
