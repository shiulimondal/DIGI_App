import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../../Constants/Colors';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { moderateScale } from '../../Constants/PixelRatio';
import { Icon } from 'react-native-basic-elements';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { FONTS } from '../../Constants/Fonts';

const HomeHeader = ({ navigation }) => {
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View>
      <View style={styles.main_view}>
        <Pressable onPress={handleDrawer}>
          <Icon name='bars' type='FontAwesome5' size={22} color={Colors.secondaryFont} />
        </Pressable>
        <Text style={styles.header_txt}>Welcome to Digi Help</Text>
        <Pressable onPress={() => navigation.navigate('NotificationScreen')}>
          <Icon name='bell' type='FontAwesome5' size={22} color={Colors.secondaryFont} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_view: {
    paddingBottom: moderateScale(7),
    height: moderateScale(45),
    width: '100%',
    backgroundColor: Colors.header,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(15),
  },
  header_txt: {
    fontFamily: FONTS.regular,
    fontSize: responsiveHeight(2),
    color: Colors.secondaryFont,
  },
});

export default HomeHeader;
