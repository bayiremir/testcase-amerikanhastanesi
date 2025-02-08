import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetailScreen from '../../screens/core/ProductDetailScreen';
import HomeScreen from '../../screens/core/HomeScreen';
import FavoriteScreen from '../../screens/core/FavoriteScreen';
import {RootStackParamList} from '../../interface/navigation.interface';

const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
