import React from "react";
import { View, Text } from "react-native";
import { TabNavigator } from "react-navigation";

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home"
      // tabBarIcon: ({ tintColor, focused }) => (
      //   <Ionicons
      //     name={focused ? "ios-home" : "ios-home-outline"}
      //     size={26}
      //     style={{ color: tintColor }}
      //   />
      // )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile"
      // tabBarIcon: ({ tintColor, focused }) => (
      //   <Ionicons
      //     name={focused ? "ios-person" : "ios-person-outline"}
      //     size={26}
      //     style={{ color: tintColor }}
      //   />
      // )
    }
  }
});

export default RootTabs;
