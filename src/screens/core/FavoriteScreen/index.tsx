import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {useGetProductsQuery} from '../../../redux/services/mobileApi';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import FavoriteCard from '../../../components/product/FavoriteCard';

const FavoriteScreen = () => {
  const favorites = useSelector((state: any) => state.userSlice.favorites);
  const {data} = useGetProductsQuery();

  const favoriteProducts = data?.products.filter(product =>
    favorites.includes(product.id),
  );

  return (
    <View style={styles.container}>
      <GoBackTabBar productdetail={false} product={undefined} />
      <Text style={styles.header}>Favorilerim</Text>
      {favoriteProducts?.length ? (
        <FlatList
          data={favoriteProducts}
          contentContainerStyle={{paddingBottom: 100}}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <FavoriteCard item={item} />}
        />
      ) : (
        <Text style={styles.emptyText}>Henüz favori ürün eklemediniz.</Text>
      )}
    </View>
  );
};

export default FavoriteScreen;
