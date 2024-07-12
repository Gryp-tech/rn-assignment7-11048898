import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import StoreScreen from './screens/StoreScreen';
import LocationsScreen from './screens/LocationsScreen';
import BlogScreen from './screens/BlogScreen';
import JeweleryScreen from './screens/JeweleryScreen';
import ElectronicScreen from './screens/ElectronicScreen';
import ClothingScreen from './screens/ClothingScreen';
import CustomDrawerContent from './screens/CustomDrawerContent';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Store" component={StoreScreen} />
      <Drawer.Screen name="Locations" component={LocationsScreen} />
      <Drawer.Screen name="Blog" component={BlogScreen} />
      <Drawer.Screen name="Jewelery" component={JeweleryScreen} />
      <Drawer.Screen name="Electronic" component={ElectronicScreen} />
      <Drawer.Screen name="Clothing" component={ClothingScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
