//import liraries
import React, { useEffect } from 'react';
import { View, Image, Text, Platform, Alert, PermissionsAndroid } from 'react-native';
import Styles from './style';
import { Images } from '../../Constants/ImageIconContant';
import { StatusBar } from 'react-native-basic-elements';


// create a component
const Initial = props => {
	const styles = Styles();

	useEffect(() => {

		setTimeout(() => {
			props.navigation.navigate('Login');
		}, 1000);
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={'#5F259E'} barStyle={'light-content'} />
			<Image
				style={styles.splashLogo}
				source={Images.splash_logo}
			/>
		</View>
	);
};


//make this component available to the app
export default Initial;
