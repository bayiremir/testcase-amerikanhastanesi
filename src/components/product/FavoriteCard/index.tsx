import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {toggleFavorite} from '../../../redux/slices/userSlice';
import {storage} from '../../../utils/Storage';
import {useDispatch, useSelector} from 'react-redux';
import {XMarkIcon} from 'react-native-heroicons/solid';
import {styles} from './styles';
import {Product} from '../../../interface/products.interface';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from '../../../interface/navigation.interface';

interface FavoriteCardProps {
  item: Product;
}

const FavoriteCard = ({item}: FavoriteCardProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.userSlice.favorites);
  const navigation = useNavigation<RootNavigationType>();
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() =>
        navigation.navigate('ProductDetailScreen', {productId: item.id})
      }>
      <Image source={{uri: item.images[0]}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(toggleFavorite(item.id));
          storage.set('favorites', JSON.stringify(favorites));
        }}>
        <XMarkIcon width={24} height={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default FavoriteCard;
