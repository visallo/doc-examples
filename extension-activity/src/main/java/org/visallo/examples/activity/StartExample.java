package org.visallo.examples.activity;

import com.google.inject.Inject;
import com.v5analytics.webster.ParameterizedHandler;
import com.v5analytics.webster.annotations.Handle;
import com.v5analytics.webster.annotations.Required;
import org.vertexium.Authorizations;
import org.visallo.core.model.longRunningProcess.LongRunningProcessRepository;
import org.visallo.core.user.User;
import org.visallo.web.clientapi.model.ClientApiLongRunningProcessSubmitResponse;

public class StartExample implements ParameterizedHandler {

    private final LongRunningProcessRepository longRunningProcessRepository;

    @Inject
    public StartExample(LongRunningProcessRepository longRunningProcessRepository) {
        this.longRunningProcessRepository = longRunningProcessRepository;
    }
    @Handle
    public ClientApiLongRunningProcessSubmitResponse start(
            User user,
            Authorizations authorizations,
            @Required(name = "propertyA") String propertyA
    ) {
        ExampleQueueItem exampleQueueItem = new ExampleQueueItem(propertyA);
        String id = this.longRunningProcessRepository.enqueue(exampleQueueItem.toJson(), user, authorizations);

        return new ClientApiLongRunningProcessSubmitResponse(id);
    }
}
