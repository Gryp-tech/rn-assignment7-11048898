// Header.js (or the appropriate file name)
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import logo from '../assets/Logo.png';
import menu from '../assets/Menu.png';
import search from '../assets/Search.png';
import shoppingBag from '../assets/shoppingBag.png';
import filter from '../assets/Filter.png';
import listView from '../assets/Listview.png';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={menu} style={styles.icon} />
      <Image source={logo} style={styles.logo} />
      <View style={styles.rightIcons}>
        <Image source={search} style={styles.icon} />
        <Image source={shoppingBag} style={styles.icon} />
      </View>
    </View>
  );
};

const SubHeader = () => {
  return (
    <View style={styles.subHeader}>
      <Text style={styles.title}>OUR STORY</Text>
      <View style={styles.rightIcons}>
        <Image source={listView} style={styles.icon} />
        <Image source={filter} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    width: 24,
    height: 24,
  },
  logo: {
    height: 40,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
  },
});

export { Header, SubHeader };