import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

class MainMap extends Component {
    static defaultProps = {
        center: {lat: -34.59894990, lng: -58.49893420},
        zoom: 13
      };


  createMapOptions = (maps) => {
      return {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: true,
        styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
      }
    }


  render () {

    return(
        <div>
            <h2>Mapa</h2>

            <div style={{width: '100%', height: '400px'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: ['AIzaSyCOl1hjueCH2zF_RljvuEObKt2mQBAQJUw'],
                                        language: 'es',
                                        region: 'es', }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={this.createMapOptions}
                >
                  <Marker lat={-34.59894990} lng={-58.49893420} text={'Rodrigo'} />
                  <Marker lat={-34.59148260} lng={-58.44339990} text={'Rodrigo'} />
                </GoogleMapReact>
            </div>

        </div>
    )

  }

}

export default MainMap;