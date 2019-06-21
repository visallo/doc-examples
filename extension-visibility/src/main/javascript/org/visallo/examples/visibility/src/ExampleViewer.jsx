import { Component } from 'react'

class ExampleText extends Component {

    render() {
        const { value, property, element } = this.props;
        const style = {};

        if (value === 'classified') {
            style.fontWeight = 'bold';
            style.color = 'orange';
        }

        return (
            <div className="visibility" style={style}>
                {_.isUndefined(value) || value === '' ?
                    (<i>{i18n('visibility.blank')}</i>) :
                    value
                }
            </div>
        );
    }
}

export default ExampleText;
