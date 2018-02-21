define(['create-react-class'], function(createReactClass) {
    const Finished = createReactClass({
        onClick() {
            alert(JSON.stringify(this.props.process, null, 2));
        },
        render() {
            return <button onClick={this.onClick} className="btn btn-mini">Test</button>
        }
    })
    return Finished;
})