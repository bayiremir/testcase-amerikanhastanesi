import React, {useState} from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import {styles} from './styles';
import {useGetProductsQuery} from '../../../redux/services/mobileApi';
import GoBackTabBar from '../../../components/tab_components/GoBackTabBar';
import SkeletonLoaderProductDetail from '../../../components/other_components/SkeletonLoaderProductDetail';
import Carousel, {Pagination} from 'react-native-snap-carousel';

interface ProductCardProps {
  route: {
    params: {
      productId: number;
    };
  };
}

const ProductDetailScreen = ({route}: ProductCardProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const {productId} = route.params;
  const {data, isLoading, error} = useGetProductsQuery();
  const product = data?.products.find(p => p.id === productId);

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Ürün bulunamadı!</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Ürünleri yüklerken hata oluştu!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GoBackTabBar product={product} productdetail={true} />
      {isLoading ? (
        <SkeletonLoaderProductDetail />
      ) : (
        <ScrollView>
          <View style={styles.carouselContainer}>
            <Carousel
              data={product.images}
              renderItem={({item}) => (
                <Image source={{uri: item}} style={styles.image} />
              )}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              loop={true}
              autoplay={true}
              autoplayInterval={5000}
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              layout="default"
              onSnapToItem={index => setActiveSlide(index)}
            />
            <Pagination
              dotsLength={product.images.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotStyle={{
                ...styles.paginationDot,
                width: 10,
                height: 10,
                borderRadius: 5,
              }}
              inactiveDotStyle={{
                ...styles.paginationDot,
                backgroundColor: 'gray',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {product.title}
            </Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description} numberOfLines={4}>
              {product.description}
            </Text>
            <Text style={styles.stock}>
              {product.stock > 0 ? 'Stokta var' : 'Tükendi'}
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ProductDetailScreen;
