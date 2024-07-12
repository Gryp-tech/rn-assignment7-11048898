// screens/JeweleryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JeweleryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Jewelery Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default JeweleryScreen;
