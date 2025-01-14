//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import HomeHeader from '../../Components/Header/HomeHeader';
import { Icon, AppTextInput, AppButton } from 'react-native-basic-elements';
import { Colors } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../Constants/PixelRatio';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

// create a component
const Support = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} />
            <View style={styles.top_view}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Icon name='left' type='AntDesign' size={22} />
                        </Pressable>
                    </View>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={styles.header_txt}>Help Center</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.message_view}>
                    <Text style={styles.total_message_txt}>If you have any problem or
                        queries, you can sendus
                        message for solution. Definitely
                        you will get thereply.</Text>
                </View>

                <Text style={styles.input_title_txt}>Your Name</Text>
                <AppTextInput
                    placeholder='Your Name'
                    inputContainerStyle={{
                        marginHorizontal: moderateScale(15),
                        borderRadius: moderateScale(5),
                        paddingHorizontal: moderateScale(7)
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                />
                <Text style={styles.input_title_txt}>Your Mobile Number</Text>
                <AppTextInput
                    placeholder='Your Mobile Number'
                    inputContainerStyle={{
                        marginHorizontal: moderateScale(15),
                        borderRadius: moderateScale(5),
                        paddingHorizontal: moderateScale(7)
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                />
                <Text style={styles.input_title_txt}>Your message</Text>
                <AppTextInput
                    numberOfLines={6}
                    placeholder='Your message'
                    inputContainerStyle={{
                        marginHorizontal: moderateScale(15),
                        borderRadius: moderateScale(5),
                        paddingHorizontal: moderateScale(7)
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(5)
                    }}
                    textAlignVertical="top"
                />


                <AppButton
                    title="Send To Admin"
                    style={styles.button}
                    textStyle={styles.button_txt}
                    // onPress={() => { navigation.navigate('BottomNavigation_User') }}
                />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    top_view: {
        backgroundColor: Colors.background,
        padding: moderateScale(7),
        paddingHorizontal: moderateScale(20),
    },
    header_txt: {
        textAlign: 'center',
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(17),
        color: Colors.black,
    },
    message_view: {
        backgroundColor: '#2E99E7',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(25),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        padding: moderateScale(10)
    },
    total_message_txt: {
        fontFamily: FONTS.semibold,
        fontSize: moderateScale(20),
        color: Colors.secondaryFont
    },
    input_title_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        marginTop: moderateScale(15),
        marginHorizontal: moderateScale(15),
        color: Colors.black
    },
    button: {
        height: responsiveWidth(13),
        backgroundColor: Colors.buttonColor,
        marginTop: responsiveWidth(15),
        marginBottom: responsiveWidth(6),
    },
    button_txt: {
        color: Colors.secondaryFont,
        fontFamily: FONTS.semibold,
        fontSize: responsiveFontSize(2.5)
    }
});

//make this component available to the app
export default Support ;
