import {
  FlatList,
  Text,
  View,
  TextInput,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useGetProductsQuery} from '../../../redux/services/mobileApi';
import {styles} from './styles';
import {Product} from '../../../interface/products.interface';
import TabBar from '../../../components/tab_components/TabBar';
import {MagnifyingGlassIcon as MagnifyingGlassIconOutline} from 'react-native-heroicons/outline';
import {BookmarkIcon as BookmarkSolid} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from '../../../interface/navigation.interface';
import ProductCard from '../../../components/product/ProductCard';
import SkeletonLoaderProduct from '../../../components/other_components/SkeletonLoaderProduct';

const HomeScreen = () => {
  const {data, isLoading, error, refetch} = useGetProductsQuery();
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const navigation = useNavigation<RootNavigationType>();

  useEffect(() => {
    if (data?.products) {
      setFilteredProducts(
        data.products.filter(item =>
          item.title.toLowerCase().includes(searchText.toLowerCase()),
        ),
      );
    }
  }, [searchText, data]);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Ürünleri yüklerken hata oluştu!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TabBar />
      {isLoading ? (
        <SkeletonLoaderProduct />
      ) : (
        <>
          <View style={styles.searchBar}>
            <MagnifyingGlassIconOutline width={20} height={20} />
            <TextInput
              style={styles.searchInput}
              placeholder="Ürün Ara..."
              placeholderTextColor={'gray'}
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('FavoriteScreen', {})}>
              <BookmarkSolid width={20} height={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredProducts}
            contentContainerStyle={{paddingBottom: 50}}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({item}) => <ProductCard item={item} />}
            keyExtractor={item => item.id.toString()}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={refetch} />
            }
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
