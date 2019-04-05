
import { SignUpNavigator } from "./SignUpNavigator";
import { HomeNavigator } from "./HomeNavigator";
import { StackNavigator } from "react-navigation";
import { Login } from "../screens/Login/Login";
import { Test } from "../screens/Test/Test";

// import { Search } from "../screens/Search/Search";
// import { Offers } from "../screens/Offers/Offers";
// import { Profile } from "../screens/Profile/Profile";
// import { Tours } from "../screens/Tours/Tours";
// import { TourDetails } from "../screens/TourDetails/TourDetails";
// import { Survey } from "../screens/Survey/Survey";
// import { EditProfile } from "../screens/EditProfile/EditProfile";
// import { EditPhoto } from "../components/EditPhoto/EditPhoto";
 
export const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    SignUpNavigator: { screen: SignUpNavigator },
    HomeNavigator: { screen: HomeNavigator },
   
    Test: {
      screen: Test
    },
    // Offers: {
    //   screen: Offers
    // },
    // Profile: {
    //   screen: Profile
    // },
    // Tours: {
    //   screen: Tours
    // },
    // TourDetails: {
    //   screen: TourDetails
    // },
    // Survey: {
    //   screen: Survey
    // },
    // EditPhoto: { 
    //   screen: EditPhoto 
    // },
    // EditProfile: { 
    //   screen: EditProfile 
    // }, 

  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);
