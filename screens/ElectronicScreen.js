// screens/ElectronicScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ElectronicScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Electronic Screen</Text>
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

export default ElectronicScreen;
