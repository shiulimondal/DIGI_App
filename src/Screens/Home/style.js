import { StyleSheet } from 'react-native';
import { Colors } from '../../Constants/Colors';
import { moderateScale } from '../../Constants/PixelRatio';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top_view: {
        backgroundColor: Colors.buttonColor,
        marginHorizontal: moderateScale(15),
        padding: moderateScale(10)
    }

});

export default styles;
