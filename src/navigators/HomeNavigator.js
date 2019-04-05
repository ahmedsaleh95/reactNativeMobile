import { TabNavigator } from "react-navigation";

import { Home } from "../screens/Home/Home";
// import { Search } from "../screens/Search/Search";
// import { Offers } from "../screens/Offers/Offers";
// import { Profile } from "../screens/Profile/Profile";
import { moderateScale, scale } from "react-native-text";

export const HomeNavigator = TabNavigator(
  {
    Home: {
      screen: Home 
    },
    // Search: {
    //   screen: Search
    // },
    // Offers: {
    //   screen: Offers
    // },
    // Profile: {
    //   screen: Profile
    // }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: false,
    lazy: false,
    tabBarOptions: {
      indicatorStyle: {
        height: 0,
        color: "#D9D9D9"
      },
      activeTintColor: "#459bf1",
      inactiveTintColor: "#353539",
      showIcon: true,
      upperCaseLabel: false,
      iconStyle: {
        height: 15,
        width: 15
        // backgroundColor: 'green',
      },
      labelStyle: {
        fontSize: 10,
        justifyContent: "center",
        // backgroundColor: 'red',
        // alignSelf: 'stretch',
        width: 100,

        // padding: 0,
        // paddingTop: 0,
        // paddingBottom: 0,
        // paddingVertical: 0,
        // margin: 0,
        marginTop: moderateScale(3),
        marginBottom: moderateScale(3)
        // marginVertical: 0,
        // backgroundColor: "black",
      },
      indicatorStyle: {
        opacity: 0
      },
      style: {
        backgroundColor: "#ffffff"
      },
      tabStyle: {
        // padding: 0,
        paddingTop: 5,
        paddingBottom: 5
        // paddingVertical: 0,
        // margin: 0,
        // marginTop: 0,
        // marginBottom: 0,
        // marginVertical: 0,
        // height: 50,
        // backgroundColor: 'blue',
        // flex: 1,
        // justifyContent: 'center',
        // // alignSelf: 'stretch',
        // alignItems: 'center',
        // height: 55,margin: 1 ,padding: 0
      }
    }
  }
);
