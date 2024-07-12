import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import addCircle from '../assets/add_circle.png';

const Product = ({ product, addToCart }) => {
  return (
    <View style={styles.product}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text>{product.name}</Text>
        <Text>Reversible angora cardigan</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <TouchableOpacity onPress={() => addToCart(product)} style={styles.addIconContainer}>
        <Image source={addCircle} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    position: 'relative',
    width: '48%',
    margin: '1%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productInfo: {
    padding: 10,
  },
  price: {
    color: '#ff6347',
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
});

export default Product;
