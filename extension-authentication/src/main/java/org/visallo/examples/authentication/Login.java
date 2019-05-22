package org.visallo.examples.authentication;

import com.google.inject.Inject;
import org.json.JSONObject;
import org.visallo.core.exception.VisalloAccessDeniedException;
import org.visallo.core.model.user.AuthorizationContext;
import org.visallo.core.model.user.UserRepository;
import org.visallo.core.user.User;
import org.visallo.web.CurrentUser;
import org.visallo.web.util.RemoteAddressUtil;
import org.visallo.webster.ParameterizedHandler;
import org.visallo.webster.annotations.Handle;
import org.visallo.webster.annotations.Required;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

public class Login implements ParameterizedHandler {

    private final UserRepository userRepository;

    @Inject
    public Login(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Handle
    public JSONObject handle(
        HttpServletRequest request,
        @Required(name = "username") String username,
        @Required(name = "password") String password
    ) throws Exception {
        username = username.trim();
        password = password.trim();

        if (isValid(username, password)) {
            User user = findOrCreateUser(username);
            AuthorizationContext context = new AuthorizationContext(
                RemoteAddressUtil.getClientIpAddr(request),
                user.getUserId(),
                user.getUsername(),
                user.getDisplayName(),
                new HashMap<>()
            );
            userRepository.updateUser(user, context);
            CurrentUser.set(request, user);
            JSONObject json = new JSONObject();
            json.put("status", "OK");
            return json;
        } else {
            throw new VisalloAccessDeniedException("", null, null);
        }
    }

    private User findOrCreateUser(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            // For form based authentication, username and displayName will be the same
            String randomPassword = UserRepository.createRandomPassword();
            user = userRepository.findOrAddUser(
                    username,
                    username,
                    null,
                    randomPassword
            );
        }
        return user;
    }

    private boolean isValid(String username, String password) {
        return username.equals(password);
    }
}
