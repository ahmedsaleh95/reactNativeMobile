import { TabNavigator } from "react-navigation";
import { StackNavigator } from "react-navigation";
import { Signup } from "../screens/Signup/Signup";
import { Signup2 } from "../screens/Signup/Signup2";

import { Dimensions } from "react-native";
export const SignUpNavigator = StackNavigator(
  {
      
    Signup: {
        screen: Signup
    },
    Signup2: {
        screen: Signup2
    }
    
  },
  {
    initialLayout: {
      height: 0,
      width: Dimensions.get("window").width
    },
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true,
    lazy: true,
    removeClippedSubviews: true,
    tabBarOptions: {
      indicatorStyle: {
        height: 0,
        color: "#D9D9D9"
      },
      activeTintColor: "#da3b6c",
      inactiveTintColor: "#353539",
      showLabel: true,
      indicatorStyle: {
        opacity: 0
      },
      style: {
        backgroundColor: "#ffffff"
      },
      tabStyle: {
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  }
);
