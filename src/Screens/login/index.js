import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView, StatusBar
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Header from "../../Components/Header/Header";
import { Colors } from "../../Constants/Colors";
import { AppButton } from "react-native-basic-elements";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('../../assets/images/login.png')} style={styles.log_img} />

        <Text style={styles.title_txt}>Please Enter your Mobile Number </Text>

        <View style={styles.inputContainer}>

          <TextInput
            value={email}
            cursorColor={Colors.primary}
            onChangeText={(txt) => setEmail(txt)}
            selectionColor={'#ccc'}
            placeholder="Enter Phone Number"
            placeholderTextColor={Colors.grey}
            style={styles.inputfild}
          />

        </View>


        <AppButton
          title="Verify"
          style={styles.button}
          textStyle={styles.button_txt}
          onPress={() => {navigation.navigate('Otp') }}
        />

        {/* <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // navigation.navigate('Main')
            }}>
            <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(2.2), color: "#fff", fontFamily:Inter .Inter  .bold }}>
              Continue
            </Text>
          </TouchableOpacity> */}
      </ScrollView>



    </View>
  )
}

export default Login;