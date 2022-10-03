import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require('../images/send.png')}
          style={styles.send}
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '8%',
    paddingHorizontal: 15,
    shadowColor: '#000',
    elevation: 2
  },
  send: {
    width: 23,
    height: 23
  }
})