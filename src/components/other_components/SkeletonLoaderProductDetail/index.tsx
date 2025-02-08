import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const {width} = Dimensions.get('window');

const SkeletonLoaderProductDetail = () => {
  return (
    <View style={skeletonStyles.container}>
      <SkeletonPlaceholder>
        <View>
          <View style={skeletonStyles.image} />

          <View style={skeletonStyles.infoContainer}>
            <View style={skeletonStyles.title} />
            <View style={skeletonStyles.price} />
            <View style={skeletonStyles.description} />
            <View style={skeletonStyles.description} />
            <View style={skeletonStyles.stock} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

const skeletonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: width * 0.75,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 16,
  },
  infoContainer: {
    paddingHorizontal: 16,
  },
  title: {
    width: '80%',
    height: 20,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  price: {
    width: '50%',
    height: 18,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  description: {
    width: '100%',
    height: 14,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginBottom: 8,
  },
  stock: {
    width: '40%',
    height: 14,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    marginTop: 10,
  },
});

export default SkeletonLoaderProductDetail;
