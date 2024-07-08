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
    fontSize:responsiveFontSize(4.2),
    fontFamily:FONTS.medium
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    height: responsiveWidth(12.8),
    borderColor: '#ccc',
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop:responsiveHeight(2)

  },
  inputfild: {
    paddingLeft: 16,
    height: responsiveHeight(6.5),
    borderColor: "#ccc",
    width: "80%",
    color: '#555',
    fontFamily:FONTS.regular,
    fontSize: responsiveFontSize(1.8)
  },
  button: {
    height: responsiveWidth(13),
    backgroundColor: Colors.buttonColor,
    marginTop: responsiveWidth(6),
    marginBottom: responsiveWidth(6),
  },
  button_txt:{
    color:Colors.secondaryFont,
    fontFamily:FONTS.semibold,
    fontSize:responsiveFontSize(2.5)
  }
});

export default styles;
