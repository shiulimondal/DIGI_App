//import liraries
import React, { Component, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from "./style";
import Header from '../../Components/Header/Header';
import { Colors } from '../../Constants/Colors';
import OTPTextInput from 'react-native-otp-textinput'
import { AppButton } from 'react-native-basic-elements';
import Modal from "react-native-modal";

// create a component
const Otp = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('../../assets/images/otp_img.png')} style={styles.log_img} />
        <Text style={styles.title_txt}>Enter an OTP we</Text>
        <Text style={styles.title_txt}>are sending you to <Text style={{ color: Colors.primaryFont }}>9732301393</Text></Text>


        <View style={styles.inputContainer}>
          <OTPTextInput
            inputCount={4}
            textInputStyle={{ borderWidth: 1, borderBottomWidth: 1, borderRadius: 4,backgroundColor:'#efe9f5',elevation:3 }}
            offTintColor={Colors.buttonColor}
          />
        </View>

        <AppButton
          title="Submit"
          style={styles.button}
          textStyle={styles.button_txt}
          onPress={() => setModalVisible(true)}
        />
      </ScrollView>

      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>

          <Image source={require('../../assets/images/check.png')} style={{height:80,width:80}}/>
          <Text style={styles.modal_massege}>Your mobile number verified sucessfully</Text>
          <AppButton
            shadow={true}
            title='Ok'
            textStyle={styles.button_txt_sty}
            style={styles.button_sty}
            // onPress={() => setModalVisible(false)}
            onPress={() => {navigation.navigate('MainStack'),setModalVisible(false)}}
          />
        </View>
      </Modal>

    </View>
  );
};

// define your styles


//make this component available to the app
export default Otp;
