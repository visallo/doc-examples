import { Component, createRef } from 'react'
import classNames from 'classnames'

class AuthReact extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', loading: false }
    }

    render() {
        const { errorMessage: defaultError } = this.props;
        const { username, password, loading, errorMessage } = this.state;

        let error = defaultError;
        if (errorMessage || errorMessage === null) {
            error = errorMessage;
        }

        return (
            <div className="basic-auth">
              <form action="" className="login" onSubmit={this.onSubmit}>
                <p className="text-error">{error || null}</p>

                <input
                    name="username"
                    className="username"
                    type="text"
                    autoComplete="username"
                    placeholder={i18n('org.visallo.examples.authentication.username')}
                    value={username}
                    onChange={this.onChange}
                    autoFocus
                />
                <input
                    name="password"
                    className="password"
                    type="password"
                    autoComplete="current-password"
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

        event.preventDefault();
        if (loading) {
            return;
        }

        this.setState({ loading: true, errorMessage: null })

        const data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);

        requestIdleCallback(() => {
            fetch('login', { method: 'POST', body: data })
                .then(response => {
                    if (response.ok) {
                        onLoginSuccess();
                    } else {
                        let errorMessage = response.statusText ||
                            i18n('org.visallo.examples.authentication.unknown');
                        if (response.status === 403) {
                            errorMessage = i18n('org.visallo.examples.authentication.invalid');
                        }
                        this.setState({ errorMessage, loading: false })
                    }
                })
        })
    }
}

export default AuthReact
