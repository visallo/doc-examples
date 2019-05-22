package org.visallo.examples.activity;

import com.google.inject.Inject;
import org.visallo.core.model.longRunningProcess.LongRunningProcessRepository;
import org.visallo.core.model.workQueue.Priority;
import org.visallo.core.user.User;
import org.visallo.web.clientapi.model.ClientApiLongRunningProcessSubmitResponse;
import org.visallo.webster.ParameterizedHandler;
import org.visallo.webster.annotations.Handle;
import org.visallo.webster.annotations.Required;

public class StartExample implements ParameterizedHandler {

    private final LongRunningProcessRepository longRunningProcessRepository;

    @Inject
    public StartExample(LongRunningProcessRepository longRunningProcessRepository) {
        this.longRunningProcessRepository = longRunningProcessRepository;
    }
    @Handle
    public ClientApiLongRunningProcessSubmitResponse start(
        User user,
        @Required(name = "propertyA") String propertyA
    ) {
        ExampleQueueItem exampleQueueItem = new ExampleQueueItem(propertyA);
        String id = this.longRunningProcessRepository.enqueue(exampleQueueItem.toJson(), Priority.NORMAL, user);

        return new ClientApiLongRunningProcessSubmitResponse(id);
    }
}
