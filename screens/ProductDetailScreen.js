import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={product.image} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Image source={require('../assets/Export.png')} style={styles.exportIcon} />
        </View>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.subheader}>MATERIALS</Text>
        <Text style={styles.description}>
          We work with monitoring programmes to ensure compliance with safety health and quality standards for our products
        </Text>
        <View style={styles.careInstructions}>
          <View style={styles.careItem}>
            <Image source={require('../assets/Do.png')} style={styles.careIcon} />
            <Text style={styles.careText}>Do not bleach</Text>
          </View>
          <View style={styles.careItem}>
            <Image source={require('../assets/tumble')} style={styles.careIcon} />
            <Text style={styles.careText}>Do not tumble dry</Text>
          </View>
          <View style={styles.careItem}>
            <Image source={require('../assets/wash.png')} style={styles.careIcon} />
            <Text style={styles.careText}>Dry clean with tetrachloroethylene</Text>
          </View>
          <View style={styles.careItem}>
            <Image source={require('../assets/Iron.png')} style={styles.careIcon} />
            <Text style={styles.careText}>Iorn at a maximum of 110°C/230°F</Text>
          </View>
          {/* Add more care instructions here */}
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.shippingDetails}>
          <Image source={require('../assets/Shipping.png')} style={styles.shippingIcon} />
          <View>
            <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
            <Text style={styles.shippingEstimate}>Estimated to be delivered on</Text>
            <Text style={styles.shippingDate}>09/11/2021 - 12/11/2021</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToBasketButton}>
          <Image source={require('../assets/Plus.png')} style={styles.plusIcon} />
          <Text style={styles.addToBasketText}>Add to Basket</Text>
          <Image source={require('../assets/Heart.png')} style={styles.heartIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 500,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exportIcon: {
    width: 24,
    height: 24,
  },
  price: {
    fontSize: 24,
    color: 'red',
    padding: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  description: {
    fontSize: 16,
    padding: 10,
  },
  careInstructions: {
    padding: 10,
  },
  careItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  careIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  careText: {
    fontSize: 16,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  shippingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  shippingIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  shippingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shippingEstimate: {
    fontSize: 14,
    color: '#555',
  },
  shippingDate: {
    fontSize: 14,
    color: '#555',
  },
  footer: {
    backgroundColor: '#000',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToBasketButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  addToBasketText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
});

export default ProductDetailScreen;
