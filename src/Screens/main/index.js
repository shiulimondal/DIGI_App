import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import DrawerNavigation from '../../Navigations/DrawerNavigation';
import { BottomNavigation_User } from '../../Navigations/BottomNavigation_User';
const Stack = createStackNavigator();
const Main = () => {
    return (
        <Stack.Navigator
            initialRouteName='DrawerNavigation'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        </Stack.Navigator>
    );
};

export default Main;
