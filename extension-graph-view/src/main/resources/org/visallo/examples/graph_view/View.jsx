define([
    'react'
], function(React) {
    'use strict';

    const GraphViewExample = React.createClass({
        render() {
            return (
                <div className="org-visallo-examples-graph-view">
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
    });

    return GraphViewExample;
});
