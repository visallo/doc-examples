package org.visallo.examples.activity;

import org.json.JSONObject;
import org.visallo.core.util.ClientApiConverter;

public class ExampleQueueItem {
    public static String TYPE = "org-visallo-examples-admin";

    private String propertyA;

    public ExampleQueueItem() {
    }

    public ExampleQueueItem(String propertyA) {
        this.propertyA = propertyA;
    }

    public String getPropertyA() {
        return propertyA;
    }

    public String getType() {
        return TYPE;
    }

    public JSONObject toJson() {
        return new JSONObject(ClientApiConverter.clientApiToString(this));
    }
}
