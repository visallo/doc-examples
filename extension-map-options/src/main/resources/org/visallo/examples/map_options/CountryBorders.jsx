define(['react'], function(React) {

    const CountryBorders = React.createClass({
        getInitialState() {
            return { visible: true }
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

            if (this.layer) {
                if (visible) {
                    this.props.map.removeLayer(this.layer);
                } else {
                    this.props.map.addLayer(this.layer);
                }
                this.setState({ visible: !visible })
            }
        },
        createCountryLayer() {
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

            map.addLayer(vector);
            this.layer = vector;
        }
    });

    return CountryBorders;
});
