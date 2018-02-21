define(['public/v1/api', 'create-react-class'], function(visalloApi, createReactClass) {
    const key = 'examples-geojson';
    const CountryBorders = createReactClass({
        getInitialState() {
            const visible = visalloData.currentUser.uiPreferences[key] === 'true'
            return { visible }
        },
        componentDidMount() {
            this.createCountryLayer();
        },
        render() {
            const { visible } = this.state;

            return (
                <label>
                    Toggle Country Borders
                    <input type="checkbox" checked={visible} onChange={this.onChange} />
                </label>
            )
        },
        onChange() {
            const { visible } = this.state;
            const newVal = !visible;

            if (visible) {
                this.props.map.removeLayer(this.layer);
            } else {
                this.props.map.addLayer(this.layer);
            }

            visalloData.currentUser.uiPreferences[key] = String(newVal);
            visalloApi.connect()
                .then(c => c.dataRequest('user', 'preference', key, newVal));

            this.setState({ visible: newVal })
        },
        createCountryLayer() {
            if (this.layer) return;
            var { ol, map, cluster } = this.props;
            var styleArray = [new ol.style.Style({
              stroke: new ol.style.Stroke({
                color: 'red',
                width: 2
              })
            })];

            var vector = new ol.layer.Vector({
                source: new ol.source.Vector({
                  url: 'org/visallo/examples/map_options/countries.geojson',
                  format: new ol.format.GeoJSON()
                }),
                style: function(feature, resolution) {
                  return styleArray;
                }
              });

            if (this.state.visible) {
                map.addLayer(vector);
            }
            this.layer = vector;
        }
    });

    return CountryBorders;
});
