/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '20181', posters: {thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}},
];
export default class changeApp extends Component {
 render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      // <View style={styles.container}>
      //   <Text>{movie.title}</Text>
      //   <Text>{movie.year}</Text>
      //   <Image source={{uri: movie.posters.thumbnail}}
      //     style={styles.thumbnail} />
      // </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

AppRegistry.registerComponent('changeApp', () => changeApp);
