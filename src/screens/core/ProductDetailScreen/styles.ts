import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../interface/fonts.enum';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    width: '100%',
    height: width * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.Bold,
    color: '#333',
    marginBottom: 6,
  },
  price: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: '#FF5733',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: '#555',
    lineHeight: 20,
    marginBottom: 10,
  },
  stock: {
    fontSize: 14,
    fontFamily: Fonts.Bold,
    marginBottom: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: 'red',
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    backgroundColor: '#333',
  },
});
