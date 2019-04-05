import React, { Component } from "react";
import { AppNavigator } from "./src/navigators/AppNavigator";
import {
  ActivityIndicator,
  Alert,
  View,
  StatusBar,
  Modal,
  Dimensions,
  AsyncStorage,
  Image,
  WebView
} from "react-native";
import { connect } from "react-redux";
import { setLoadingAction } from "./src/actions/setLoadingAction";
// import RNFetchBlob from "react-native-fetch-blob";
import { moderateScale } from "react-native-text";
// override global fetch object
// fetch = (uri, request) => {
//   return RNFetchBlob.config({ trusty: true }).fetch(
//     request.method,
//     uri,
//     request.headers,
//     request.body
//   );
// };

// API_URL = "http://192.168.1.7:8080"; // saleh
API_URL = "https://kingofdarknessahmed.000webhostapp.com";
ERROR_MSG = "We're Sorry but Something Went Wrong. Please Try Again.";
ICON_DIMENSION = moderateScale(25);
const { height, width } = Dimensions.get("window");
DEVICE_TYPE = height / width > 1.6 ? "PHONE" : "TABLET";
const screen = Dimensions.get("window");
const mapStateToProps = state => ({
  store: state
});
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle("light-content", true);
    StatusBar.setBackgroundColor("#1e90ff", true);
    this.state = {
      loadingStore: true,
      logo: require("./assets/images/splash.jpg"),
      showSplash: true
    };
  }

  LOAD = state => {
    this.props.dispatch({
      type: "LOAD_STATE",
      payload: { state: state ? state : {} }
    });
    this.props.dispatch(setLoadingAction(false));
    this.setState({ loadingStore: false });
  };

  componentDidMount() {
    AsyncStorage.getItem("state")
      .then(state => {
        this.LOAD(JSON.parse(state));
      })
      .catch(error => {
        alert("Loading : " + error);
      });
  }

  componentWillMount() {
    this.showSplash()
  }
  componentWillUnmount() {}

  showSplash = () => {
    setTimeout(()=>{
      this.setState({
        showSplash: false
      })
    }, 2000)
  }

  render() {
    if (this.state.loadingStore || this.state.showSplash == true) {
      return (
        <View
          
          style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white"
          }}
        >
          <Image
            style={{ width: screen.width, height: screen.height}}
            resizeMode={"stretch"}
            source={this.state.logo}
          />
        </View>
      );
    }
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Modal
          visible={this.props.store.isLoading ? true : false}
          animationType={"slide"}
          transparent={true}
          onRequestClose={() => {
            this.props.dispatch(setLoadingAction(false));
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "white",
              opacity: 0.8
            }}
          >
            <ActivityIndicator color="#da3b6c" size="large" />
          </View>
        </Modal>
        <AppNavigator />
      </View>
    );
  }
}
export default connect(mapStateToProps)(App);
