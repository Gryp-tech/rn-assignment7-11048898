import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubHeader = () => {
  return (
    <View style={styles.subHeaderContainer}>
      <Text style={styles.subHeaderText}>Welcome to Our Store!</Text>
      <Text style={styles.subHeaderDescription}>
        Browse through our collection of products.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeaderContainer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeaderDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default SubHeader;
