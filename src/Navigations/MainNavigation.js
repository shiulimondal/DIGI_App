// import React from "react";
// import {
//   createNativeStackNavigator,
//   CardStyleInterpolators,
// } from '@react-navigation/native-stack';
// import {
//   Login,
//   Initial,
//   Otp,
// } from "../Screens";
// import { enableFreeze } from 'react-native-screens';
// enableFreeze(true);


// const Stack = createNativeStackNavigator();

// const MainNavigation = (props) => {

//   const horizontalAnimation = {
//     gestureDirection: "horizontal",
//     cardStyleInterpolator: ({ current, layouts }) => {
//       return {
//         cardStyle: {
//           transform: [
//             {
//               translateX: current.progress.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [layouts.screen.width, 0],
//               }),
//             },
//           ],
//         },
//       };
//     },
//   };

//   const verticalAnimation = {
//     gestureDirection: "vertical",
//     cardStyleInterpolator: ({ current, layouts }) => {
//       return {
//         cardStyle: {
//           transform: [
//             {
//               translateY: current.progress.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [layouts.screen.height, 0],
//               }),
//             },
//           ],
//         },
//       };
//     },
//   };

//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         headerStyle: {
//           // backgroundColor: '',
//         },
//         headerShadowVisible: false,
//       }}
//     >
//      <Stack.Screen
//         name="Initial"
//         component={Initial}
//         options={verticalAnimation}
//       /> 
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{headerTitle: 'Login', headerShown: false}}
//       />
//       <Stack.Screen
//         name="Otp"
//         component={Otp}
//         options={{headerTitle: 'Otp', headerShown: false}}
//       />
//        {/* <Stack.Screen
//         name="Main"
//         component={Main}
//         options={{headerTitle:'Main',headerShown: false}}
//       /> */}

//     </Stack.Navigator>
//   );
// };

// // export default MainNavigation;
// export default MainNavigation ;

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Initial, Login, Otp } from '../Screens';
import { enableFreeze } from 'react-native-screens';
enableFreeze(true);
const Stack = createStackNavigator();
const MainNavigation = (props) => {

    const horizontalAnimation = {
    gestureDirection: "horizontal",
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  const verticalAnimation = {
    gestureDirection: "vertical",
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <Stack.Navigator
      initialRouteName='Initial'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={verticalAnimation}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: 'Login', headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerTitle: 'Otp', headerShown: false }}
      />
    </Stack.Navigator>


  );
};

export default MainNavigation
