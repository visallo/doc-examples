define([
    'create-react-class'
], function(createReactClass) {
    'use strict';

    const GraphViewExample = createReactClass({
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
    });

    return GraphViewExample;
});
