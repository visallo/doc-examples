import { registry, connect } from 'public/v1/api'

registry.registerExtension('org.visallo.logout', function() {
    var seconds = 3;
    /* eslint no-alert: 0 */
    alert('Will logout in ' + seconds + ' seconds');
    _.delay(function() {
        connect()
            .then(function(connected) {
                $(document).trigger('willLogout');
                return connected.dataRequest('user', 'logout');
            })
            .then(function() {
                window.location.reload();
            })
    }, seconds * 1000)
    return false;
});
