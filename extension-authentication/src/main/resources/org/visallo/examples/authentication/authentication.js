define([
    'public/v1/api',
    './login.hbs'
], function(
    visallo,
    template) {
    'use strict';

    return visallo.defineComponent(ExampleAuthentication);

    function ExampleAuthentication() {

        this.defaultAttrs({
            errorSelector: '.text-error',
            usernameSelector: '.login input.username',
            passwordSelector: 'input.password',
            loginButtonSelector: '.login .btn-primary',
            signInButtonSelector: '.signin',
            loginFormSelector: '.login'
        });

        this.after('initialize', function() {
            var self = this;

            this.$node.html(template(this.attr));
            this.enableButton(false);

            this.on('click', {
                loginButtonSelector: this.onLoginButton,
                signInButtonSelector: this.onSignInButton
            });

            this.on('keyup change paste', {
                usernameSelector: this.onUsernameChange,
                passwordSelector: this.onPasswordChange
            });

            this.select('usernameSelector').focus();
        });

        this.onSignInButton = function(event) {
            event.preventDefault();

            var form = this.select('loginFormSelector').show();
            _.defer(function() {
                form.find('input').eq(0).focus();
            });
        };

        this.checkValid = function() {
            var self = this,
                user = this.select('usernameSelector'),
                pass = this.select('passwordSelector');

            _.defer(function() {
                self.enableButton(
                    $.trim(user.val()).length > 0 &&
                    $.trim(pass.val()).length > 0
                );
            });
        };

        this.onUsernameChange = function(event) {
            this.checkValid();
        };

        this.onPasswordChange = function(event) {
            this.checkValid();
        };

        this.onLoginButton = function(event) {
            var self = this,
                $error = this.select('errorSelector'),
                $username = this.select('usernameSelector'),
                $password = this.select('passwordSelector');

            event.preventDefault();
            event.stopPropagation();
            event.target.blur();

            if (this.submitting) {
                return;
            }

            this.enableButton(false, true);
            this.submitting = true;
            $error.empty();

            $.post('login', {
                username: $username.val(),
                password: $password.val()
            }).fail(function(xhr, status, error) {
                self.submitting = false;
                if (xhr.status === 403) {
                    error = i18n('org.visallo.examples.authentication.invalid');
                }
                $error.text(error);
                self.enableButton(true);
            })
            .done(function() {
                self.trigger('loginSuccess');
            })
        };

        this.enableButton = function(enable, loading) {
            if (this.submitting) return;
            var button = this.select('loginButtonSelector');

            if (enable) {
                button.removeClass('loading').removeAttr('disabled');
            } else {
                button.toggleClass('loading', !!loading)
                    .attr('disabled', true);
            }
        };
    }

});
