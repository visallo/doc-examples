define([
    'react'
], function(React) {
    'use strict';

    const MenubarExamplePane = React.createClass({
        render() {
            return (
                <div style={{padding: '1em'}}>
                    Example Panel
                    
                    <button 
                        style={{display: 'block', width: '100%'}}
                        class="btn">Example</button>
                </div>
            )
        }
    });

    return MenubarExamplePane ;
});
