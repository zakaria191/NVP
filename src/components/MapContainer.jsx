import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    render() {
      const mapStyles = {
        width: '100%',
        height: '400px',
      };
  
      const { google } = this.props;
  
      // Replace with your actual address coordinates
      const initialPosition = { lat: 33.5825045, lng: -7.6194512 };
  
      return (
        <Map
          google={google}
          zoom={14}
          style={mapStyles}
          initialCenter={initialPosition}
        >
          <Marker position={initialPosition} />
        </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBEZBPU6Er2pB090vuNPAwrcUC_71YKTmU',
  })(MapContainer);