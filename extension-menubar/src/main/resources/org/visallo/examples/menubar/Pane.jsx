define([
    'create-react-class'
], function(createReactClass) {
    'use strict';

    const MenubarExamplePane = createReactClass({
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
    });

    return MenubarExamplePane ;
});
