import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TabBar = () => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View style={[styles.tabBarContainer, {marginTop: statusBarHeight}]}></View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
