import { createStackNavigator, } from '@react-navigation/stack';
import React from 'react';
import DrawerNavigation from './DrawerNavigation';
import CategoryScreen from '../Screens/Home/CategoryScreen/Index';
import BottomNavigation_User from './BottomNavigation_User';
import { MyProfile } from '../Screens/DrawerScreen/MyProfile';
import { MyBankAccount } from '../Screens/DrawerScreen/MyBankAccount';
import { MyMember } from '../Screens/DrawerScreen/MyMember';
import { MyIncome } from '../Screens/DrawerScreen/MyIncome';
import { DrawerWorks } from '../Screens/DrawerScreen/DrawerWorks';
import { AboutUs } from '../Screens/DrawerScreen/AboutUs';
import { Settings } from '../Screens/DrawerScreen/Settings';
import NotificationScreen from '../Screens/NotificationScreen/NotificationScreen';
import Home from '../Screens/Home/Index';
import MyDirectMember from '../Screens/DrawerScreen/MyDirectMember';
import ChangePassword from '../Screens/DrawerScreen/ChangePassword';
import Support from '../Screens/Help/Support';
import MyDepthMember from '../Screens/DrawerScreen/MyDepthMember';


const Stack = createStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='DrawerNavigation'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            <Stack.Screen name="BottomNavigation_User" component={BottomNavigation_User} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="MyBankAccount" component={MyBankAccount} />
            <Stack.Screen name="MyMember" component={MyMember} />
            <Stack.Screen name="MyIncome" component={MyIncome} />
            <Stack.Screen name="DrawerWorks" component={DrawerWorks} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="MyDirectMember" component={MyDirectMember} />
            <Stack.Screen name="MyDepthMember" component={MyDepthMember} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>


    );
};

export default MainStack