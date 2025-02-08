import {StyleSheet} from 'react-native';
import {Fonts} from '../../../interface/fonts.enum';

export const styles = StyleSheet.create({
  productCard: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    flex: 1,
  },
});
