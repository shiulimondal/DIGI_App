// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import { Colors } from '../../Constants/Colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { FONTS } from '../../Constants/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  log_img: {
    height: responsiveHeight(30),
    width: responsiveWidth(62),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: responsiveHeight(5)
  },
  title_txt: {
    color: Colors.black,
    marginHorizontal: 15,
    fontSize: responsiveFontSize(2.8),
    fontFamily: FONTS.medium
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    fontFamily: FONTS.regular,
    marginHorizontal: 15,
    marginTop: responsiveHeight(2),
    borderColor: Colors.buttonColor
  },
  button: {
    height: responsiveWidth(13),
    backgroundColor: Colors.buttonColor,
    marginTop: responsiveWidth(6),
    marginBottom: responsiveWidth(6),
  },
  button_txt: {
    color: Colors.secondaryFont,
    fontFamily: FONTS.semibold,
    fontSize: responsiveFontSize(2.5)
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: (10),
    padding: (20),
    borderWidth: 2,
    alignItems: 'center'
  },
  modal_massege: {
    fontFamily: FONTS.regular,
    fontSize: responsiveFontSize(2),
    color: Colors.black,
    marginTop: responsiveHeight(2)
  },
  button_sty: {
    backgroundColor: Colors.buttonColor,
    borderRadius: 20,
    height: (30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: responsiveWidth(20),
    marginTop: responsiveHeight(4)
  },
  button_txt_sty: {
    fontFamily: FONTS.bold,
    fontSize: (13),
    alignSelf: 'center',
    color: '#fff'
  },
});

export default styles;
