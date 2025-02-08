import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles as homeStyles} from '../../../components/product/ProductCard/styles'; // ProductCard styles

const SkeletonLoaderProduct = () => {
  const skeletonItems = Array.from({length: 10});

  return (
    <FlatList
      data={skeletonItems}
      keyExtractor={(_, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={{paddingBottom: 50}}
      showsVerticalScrollIndicator={false}
      renderItem={() => (
        <View style={skeletonStyles.productCard}>
          <SkeletonPlaceholder>
            <View>
              <View style={skeletonStyles.productImage} />
              <View style={skeletonStyles.productTitle} />
              <View style={skeletonStyles.productPrice} />
              <View style={skeletonStyles.productStock} />
            </View>
          </SkeletonPlaceholder>
        </View>
      )}
    />
  );
};

const skeletonStyles = StyleSheet.create({
  productCard: {
    ...homeStyles.productCard,
    justifyContent: 'center', // Skeleton'da daha iyi görünüm için ortalama
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    alignSelf: 'center',
  },
  productTitle: {
    width: '80%',
    height: 14,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    alignSelf: 'center',
  },
  productPrice: {
    width: '60%',
    height: 14,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    alignSelf: 'center',
  },
  productStock: {
    width: '50%',
    height: 12,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginTop: 5,
    alignSelf: 'center',
  },
});

export default SkeletonLoaderProduct;
