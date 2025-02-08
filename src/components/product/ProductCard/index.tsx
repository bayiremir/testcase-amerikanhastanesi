import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {RootNavigationType} from '../../../interface/navigation.interface';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../../interface/products.interface';
import {HeartIcon as HeartIconOutline} from 'react-native-heroicons/outline';
import {HeartIcon as HeartIconSolid} from 'react-native-heroicons/solid';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../../../redux/slices/userSlice';

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({item}: ProductCardProps) => {
  const navigation = useNavigation<RootNavigationType>();
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.userSlice.favorites);
  const isFavorite = favorites.includes(item.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(item.id));
  };

  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() =>
        navigation.navigate('ProductDetailScreen', {
          productId: item.id,
        })
      }>
      <TouchableOpacity
        onPress={handleToggleFavorite}
        style={styles.favoriteButton}>
        {isFavorite ? (
          <HeartIconSolid width={20} height={20} color="red" />
        ) : (
          <HeartIconOutline width={20} height={20} color="gray" />
        )}
      </TouchableOpacity>
      <Image source={{uri: item.thumbnail}} style={styles.productImage} />
      <Text style={styles.productTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Text style={styles.productStock}>
        {item.stock > 0 ? 'Stokta var' : 'Tükendi'}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
