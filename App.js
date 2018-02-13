/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';
//import ClusteredMapView from 'react-native-maps-super-cluster';
import image from './images/flag-pink.png';

export default class App extends Component<{}> {
  render() {

    const coordinates = [];

    coordinates.push({
      key: 0,
      location: {
        longitude: -70.23,
        latitude: -33.23
      }
    });

    for(let i = 1; i<100; i++) {

      const location = {
        longitude: coordinates[i-1].location.longitude + (Math.random() * (i%2 === 0 ? -1 : 1)),
        latitude: coordinates[i-1].location.latitude + (Math.random() * (i%2 === 0 ? -1 : 1)),
      };

      coordinates.push({ key: i, location });

    }

    return (
      <MapView
        renderMarker={renderMarker}
        initialRegion={{
          longitude: -70.23,
          latitude: -33.23,
          latitudeDelta: 9.22,
          longitudeDelta: 4.21,
        }}
        style={StyleSheet.absoluteFillObject}>

        { coordinates.map(({ key, location } ) => <MapView.Marker key={key} image={image} coordinate={location} />) }

      </MapView>
    );
  }
}

function renderMarker({ location }) {
  return (
    <MapView.Marker
      image={image}
      coordinate={location}
    >
      <MapView.Callout>
        <Text>BiG BiG Callout</Text>
      </MapView.Callout>
    </MapView.Marker>
  );
}
