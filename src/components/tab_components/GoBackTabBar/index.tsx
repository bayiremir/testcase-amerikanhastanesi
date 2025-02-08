import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  HeartIcon as HeartIconOutline,
  ArrowLeftIcon as ArrowLeftIconOutline,
} from 'react-native-heroicons/outline';
import {HeartIcon as HeartIconSolid} from 'react-native-heroicons/solid';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../../../redux/slices/userSlice';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../../interface/products.interface';

interface ProductCardProps {
  product?: Product;
  productdetail?: boolean;
}

const GoBackTabBar = ({product, productdetail}: ProductCardProps) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.userSlice.favorites);
  const isFavorite = favorites.includes(product?.id);
  const navigation = useNavigation();

  return (
    <View style={[styles.tabBarContainer, {marginTop: statusBarHeight}]}>
      <TouchableOpacity
        style={styles.leftIcon}
        onPress={() => navigation.goBack()}>
        <ArrowLeftIconOutline color={'black'} width={24} height={24} />
      </TouchableOpacity>

      <Image
        source={require('../../../../assets/logo/Amerikan_Hastanesi_Logo.png')}
        style={styles.image}
      />

      {productdetail && (
        <TouchableOpacity
          onPress={() => product && dispatch(toggleFavorite(product.id))}
          style={styles.favoriteIcon}>
          {isFavorite ? (
            <HeartIconSolid width={24} height={24} color="red" />
          ) : (
            <HeartIconOutline width={24} height={24} color="black" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GoBackTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 50,
  },
  leftIcon: {
    padding: 10,
  },
  favoriteIcon: {
    padding: 10,
  },
});
