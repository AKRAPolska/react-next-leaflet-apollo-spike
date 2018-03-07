import React, { Component } from 'react';

//let TileLayer, WMSTileLayer, LayersControl, FeatureGroup, Circle, BaseLayer, Overlay, EditControl
class App extends Component {
    constructor() {
        super()
        this.state = {
            showMap: false
        }

        this.RL = { LayersControl: {}};
        this.RLD = {};
    }

    componentDidMount() {
        this.RL = require('react-leaflet');
        this.RLD = require('react-leaflet-draw');

        this.setState({
            showMap: true,
        })
    }

    render() {
        const center = [52, 19]
        const TRUE = true;
        const OPACITY = 0.5;

        const { Map, TileLayer, WMSTileLayer, LayersControl, FeatureGroup, Circle } = this.RL;
        const { BaseLayer, Overlay } = LayersControl;
        const { EditControl } = this.RLD;

        return this.state.showMap ? (
            <Map center={center} zoom={7} style={{ height: "100vh" }}>

                <LayersControl position="topright">
                    <BaseLayer checked name="tileLayer">
                        <TileLayer
                            attribution="&copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </BaseLayer>
                    <Overlay name="administracyjna">
                        <WMSTileLayer
                            layers="Administracyjna"
                            opacity={OPACITY}
                            url="http://mapy.geoportal.gov.pl/wss/service/img/guest/Administracyjna/MapServer/WMSServer"
                        />
                    </Overlay>
                    <Overlay name="ortofotomapa">
                        <WMSTileLayer
                            layers="Raster"
                            version='1.3.0'
                            transparent='true'
                            format="image/png"
                            url="http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer"
                        />
                    </Overlay>
                    <Overlay name="dzialki">
                        <WMSTileLayer
                            layers="Dzialki"
                            format="image/png"
                            transparent='true'
                            url="http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer"
                        />
                    </Overlay>
                    <Overlay name="numery działek">
                        <WMSTileLayer
                            layers="NumeryDzialek"
                            format="image/png"
                            transparent='true'
                            url="http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer"
                        />
                    </Overlay>
                </LayersControl>

                <FeatureGroup>
                    <EditControl
                        position='topright'
                        onEdited={this._onEditPath}
                        onCreated={this._onCreate}
                        onDeleted={this._onDeleted}
                        draw={{
                            rectangle: false
                        }}
                    />
                    <Circle center={[51.51, -0.06]} radius={200} />
                </FeatureGroup>
            </Map>
        ) : <div>Loading...</div>
    }
}

export default App


// url parametry
// ?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities

// podrecznik geoportal
// http://www.geoportal.gov.pl/documents/10179/26435/Geoportal-podrecznik.pdf
