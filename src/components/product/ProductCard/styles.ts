import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interface/fonts.enum';

export const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 14,
    fontFamily: Fonts.ExtraBold,
    textAlign: 'center',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: Fonts.Bold,
    color: '#ff6347',
  },
  productStock: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    color: 'gray',
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
