import { Component, createRef } from 'react'
import classNames from 'classnames'

class AuthReact extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', loading: false }
        this.form = createRef();
    }

    render() {
        const { errorMessage: defaultError } = this.props;
        const { username, password, loading, errorMessage } = this.state;

        let error = defaultError;
        if (errorMessage || errorMessage === null) {
            error = errorMessage;
        }

        return (
            <div class="basic-auth">
              <form action="" className="login" ref={this.form} onSubmit={this.onSubmit}>
                <p className="text-error">{error || null}</p>

                <input
                    name="username"
                    className="username"
                    type="text"
                    placeholder={i18n('org.visallo.examples.authentication.username')}
                    value={username}
                    onChange={this.onChange}
                    autofocus
                />
                <input
                    name="password"
                    className="password"
                    type="password"
                    placeholder={i18n('org.visallo.examples.authentication.password')}
                    value={password}
                    onChange={this.onChange}
                />

                <button
                    className={classNames('btn btn-primary', { loading })}
                    disabled={!(username.trim().length && password.trim().length)}
                >{i18n('org.visallo.examples.authentication.login')}</button>

              </form>
            </div>
        );
    }

    onChange = event => {
        const { target } = event;
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = event => {
        const { onLoginSuccess } = this.props;
        const { username, password, loading } = this.state;

        if (loading) {
            return;
        }

        this.setState({ loading: true, errorMessage: null })

        console.log(username, password, this.form.current)
        const data = new FormData(this.form.current);

        requestIdleCallback(() => {
            console.log(data)

            fetch('login', data)
                .then(() => {
                    onLoginSuccess();
                })
                .catch(error => {
                    console.log('error', error)
                    let errorMessage = error && error.message ||
                        i18n('org.visallo.examples.authentication.unknown');
                    if (error.status === 403) {
                        errorMessage = i18n('org.visallo.examples.authentication.invalid');
                    }
                    this.setState({ errorMessage, loading: false })
                })
        })
    }
}

export default AuthReact
