import React, { Component } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground
} from "react-native";
import { Button } from "../../components/Button/Button";
import { NavigationActions } from "react-navigation";
import { getAddressAction } from "../../actions/getAddressAction";
import { setLoadingAction } from "../../actions/setLoadingAction";
import { connect } from "react-redux";

// import { renderVerificationModal } from "../VerificationModal/VerificationModal";
// import { TextInputLayout } from "rn-textinputlayout";
// import { Dropdown } from "react-native-material-dropdown";
// import Autocomplete from "react-native-autocomplete-input";
const mapStateToProps = state => ({
  store: state
})
import { getStyle } from "./styles";
const styles = getStyle();

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    const arrowLeft = require("../../../assets/icons/arrow-left.png");
    // const close = require("../../../assets/icons/close.png");
    // let eighteenYearsAgo = new Date();
    // eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    // eighteenYearsAgo =
    //   eighteenYearsAgo.getDate() +
    //   "-" +
    //   (eighteenYearsAgo.getMonth() + 1) +
    //   "-" +
    //   eighteenYearsAgo.getFullYear();
    this.state = {
      arrowLeft: arrowLeft,
    //   close: close,
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
    //   date: eighteenYearsAgo,
    //   confirmPassword: "",
    //   workAddress: "",
    //   lastFourDigits: "",
    //   npiNumber: "",
    //   licenseNumber: "",
    //   cca2: "US",
    //   callingCode: "1",
      // number: "",
      // phoneNumber: "",
    //   state_query: "",
    //   license_state: [],
    //   country: "",
    //   phoneNumber: "",
    //   ZIP: "",
    //   city: "",
    //   state: "",
    //   DEA: ""
    };
  }
//   onPressFlag = () => {
//     this.refs.countryPicker.openModal();
//   };
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    return {
      tabBarVisible: false,
      header: null,
      tabBarVisible:
        navigation.state.params &&
        (navigation.state.params.hideTabBar == null ||
          navigation.state.params.hideTabBar == true),
      animationEnabled: true,
      tabBarLabel: ({ focused }) => {
        
      }
    };
  };

  componentDidMount(){
    // this.props.dispatch(getAddressAction(this.handleCallbackAddressData));
  }

  handleCallbackAddressData = (response) => {
    alert("got Address Data")

    // alert(JSON.stringify(response));
    if (response.msg == "User registered") {
      // alert("got Address Data")
      // this.setState({
      //   showModal: true
      // })
    } else if (response.msg == "this e-mail is already registered") {
      alert("This e-mail is already registered");
    } else if (response.msg == "User under 18") {
      alert("You are not allowed to register if you are under 18");
    } else {
      alert(JSON.stringify(response));
    }
  }

  onChangeNumber = text => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }
    return newText;
  };

  goToSignup2 = () => {
    const { navigate } = this.props.navigation;
    const { firstName, email, password } = this.state;
    // if (firstName.length == 0) {
    //   alert("Name is required");
    // } else if (!this.validateEmail(email)) {
    //   alert("Email is not valid");
    // } else if (password.length < 8) {
    //   alert("Password should contain at least 8 characters");
    // } else if (password != this.state.confirmPassword) {
    //   alert("Passwords doesn't match");
    // } else {
    //   navigate("Signup2", {
    //     firstName: this.state.firstName,
    //     email: this.state.email,
    //     password: this.state.password,
    //   })
    // }
    navigate("Signup2", {
      firstName: this.state.firstName,
      email: this.state.email,
      password: this.state.password,
    })
    
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };


  renderInfo = () => {
    const { navigate } = this.props.navigation;

    // const qStates = this.findState(this.state.state_query);
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.body}
        onContentSizeChange={() => {
        //   if (this.state.state_query) this.refs.form.scrollToEnd();
        }}
        ref="form"
      >

        <Image
          source={require("../../../assets/icons/logo-edited.png")}
          style={styles.image}
          resizeMode="contain"
          // blurRadius={1}
        />
        
        <View style={{ marginTop: 80, marginBottom: 20, alignItems: "center"}}>
          
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            onChangeText={text => this.setState({ firstName: text })}
            placeholder="Name"
            placeholderTextColor="black"
            ref="firstName"
            value={this.state.firstName}
            maxLength={35}
            onSubmitEditing={() => this.refs.email.focus()}
          />
        
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="black"
            value={this.state.email}
            ref="email"
            maxLength={35}
            onChangeText={text => this.setState({ email: text })}
            onSubmitEditing={() => {
              this.refs.password.focus()
            }}
          />
        
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            placeholderTextColor="black"
            placeholder="Password"
            ref="password"
            maxLength={320}
            value={this.state.password}
            secureTextEntry={true}
            // keyboardType="email-address"
            onChangeText={text => this.setState({ password: text })}
            onSubmitEditing={() => this.refs.cpassword.focus()}
          />

          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="black"
            underlineColorAndroid={"transparent"}
            style={styles.textInput}
            value={this.state.confirmPassword}
            ref="cpassword"
            secureTextEntry={true}
            maxLength={30}
            // keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
            onChangeText={text => {
              // let newText = this.onChangeNumber(text);
              this.setState({
                confirmPassword: text,
                // phoneNumber:
                //   (this.state.callingCode.charAt(0) === "+" ? "" : "+") +
                //   this.state.callingCode +
                //   newText
              });
            }}
          />
        </View>
        
        <Button text="Next" style={styles.Button} onPress={()=> {this.goToSignup2()}}/>
       
        <View style={{height: 60}}/>

      </ScrollView>      
    );
  };
//   goHome = () => {
//     const resetAction = NavigationActions.reset({
//       index: 0,
//       actions: [NavigationActions.navigate({ routeName: "Login" })]
//     });
//     this.props.navigation.dispatch(resetAction);
//   };

  validateRequired = text => {
    return text && text.length != 0;
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  validateName = name => {
    // alert(JSON.stringify(name))
    if (!this.validateRequired(name)) return false;
    var re = /^(([a-zA-Z])*)$/;
    return re.test(name);
  };
 
  isValidPN = () => {
    
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        // source={require("../../../assets/images/splash.jpg")}
        style={{ flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white"}}
        resizeMode={"cover"}
        blurRadius={1}
      >
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={()=>{
              this.goBack()
          }}
        >
          <Image
            source={this.state.arrowLeft}
            resizeMode="cover"
            style={styles.headerLeftImage}
          />
        </TouchableOpacity>
        {this.renderInfo()}
      </ImageBackground>
      // <View style={styles.container}>
      //   {/* <View style={styles.header}> */}
      //     {/* <View>
      //       <TouchableOpacity onPress={this.goHome}>
      //         <Image
      //           source={this.state.arrowLeft}
      //           resizeMode="cover"
      //           style={styles.image}
      //         />
      //       </TouchableOpacity>
      //       <ScalableText style={styles.headerTitle}>
      //         {"  Sign up"}
      //       </ScalableText>
      //     </View> */}
      //     {/* <TouchableOpacity onPress={() => this.goForward()}> */}
      //     {/* <TouchableOpacity onPress={() => alert("should navigate next page")}>
      //       <ScalableText style={styles.headerNext}>{"Next"}</ScalableText>
      //     </TouchableOpacity> */}
      //   {/* </View> */}
      //   {/* {renderVerificationModal(this.closeModal, this.goHome)} */}
      // </View>
    );
  }
  
}
export const Signup = connect(mapStateToProps)(SignupScreen);
