
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigation_User from './BottomNavigation_User';
import DrawerCard from '../Components/DrawerCard/DrawerCard';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from '../Constants/Colors';
import Home from '../Screens/Home/Index';
import NotificationScreen from '../Screens/NotificationScreen/NotificationScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            useLegacyImplementation={false}
            initialRouteName='BottomNavigation_User'
            drawerContent={props => <DrawerCard {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: Colors.buttonColor
                },
            }}>
            <Drawer.Screen name="BottomNavigation_User" component={BottomNavigation_User} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation


