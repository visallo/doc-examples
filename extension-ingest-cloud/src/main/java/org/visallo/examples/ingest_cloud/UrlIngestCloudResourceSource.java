package org.visallo.examples.ingest_cloud;

import org.json.JSONArray;
import org.json.JSONObject;
import org.visallo.core.exception.VisalloException;
import org.visallo.core.ingest.cloud.CloudResourceSource;
import org.visallo.core.ingest.cloud.CloudResourceSourceItem;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;

public class UrlIngestCloudResourceSource implements CloudResourceSource {

    @Override
    public Collection<CloudResourceSourceItem> getItems(JSONObject jsonObject) {

        Collection<CloudResourceSourceItem> items = new ArrayList<>();

        JSONArray paths = jsonObject.getJSONArray("paths");
        String url = paths.optString(0);
        items.add(itemForUrl(url));

        return items;
    }

    private CloudResourceSourceItem itemForUrl(String urlStr) {
        try {
            URL url = new URL(urlStr);
            InputStream is = url.openStream();

            CloudResourceSourceItem item = new CloudResourceSourceItem() {
                @Override
                public InputStream getInputStream() {
                    return is;
                }

                @Override
                public String getName() {
                    return url.getFile().replaceAll("^.*/([^/]+)$", "$1");
                }

                @Override
                public Long getSize() {
                    return null;
                }
            };

            return item;

        } catch (IOException e) {
            throw new VisalloException("Unable to read URL", e);
        }
    }
}
