import com.visallo.node.listener.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class InMemoryGroupMembershipService implements GroupMembershipService {
    private Set<Group> groups = new HashSet<>();

    @Override
    public Group joinGroup(GroupName groupName, GroupMember groupMember) {
        Group group = new InMemoryGroup();
        groups.add(group);
        return group;
    }

    @Override
    public GroupWatcher createGroupWatcher(GroupName groupName) {
        return new InMemoryGroupWatcher(groupName);
    }

    private static class InMemoryGroup implements Group {
        @Override
        public void leave() {

        }
    }

    private static class InMemoryGroupWatcher implements GroupWatcher {
        private GroupName groupName;
        private GroupMember groupMember;

        public InMemoryGroupWatcher(GroupName groupName) {
            this.groupName = groupName;
            this.groupMember = new InMemoryGroupMember(groupName.name());
        }

        @Override
        public void addListener(GroupListener groupListener) {

        }

        @Override
        public void close() throws IOException {

        }

        @Override
        public List<GroupMember> getMembers() {
            List<GroupMember> list = new ArrayList<>();
            list.add(groupMember);
            return list;
        }

        @Override
        public GroupName getGroupName() {
            return groupName;
        }
    }
    private static class InMemoryGroupMember implements GroupMember {
        private String id;

        public InMemoryGroupMember(String id) {
            this.id = id;
        }

        @Override
        public String getMemberId() {
            return id;
        }

        @Override
        public String getHostName() {
            return "SomeHost";
        }
    }
}
