import React, { Component } from "react";
import {
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
  Image,
  AsyncStorage,
  ImageBackground
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { setLoadingAction } from "../../actions/setLoadingAction";
import ScalableText from "react-native-text";
import { styles } from "./styles";
import { Button } from "../../components/Button/Button";
// import { loginAction } from "../../actions/loginAction";
import { signupResponseAction } from "../../actions/signupResponseAction";

const mapStateToProps = state => ({
  store: state
});
class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  
  goHome= () => {
    // this.props.navigation.navigate('Home');
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: "HomeNavigator" })
      ],
      key: null
    });
    this.props.navigation.dispatch(resetAction);
  };
  
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  login = () => {
    const { email, password } = this.state;
    if (email.length == 0) {
      alert("Email is required");
    } else if (!this.validateEmail(email)) {
      alert("Email is not valid");
    } else if (password.length < 8) {
      alert("Password should contain at least 8 characters");
    } else {
      alert("Good to go")
      // this.props.dispatch(setLoadingAction(true));
      // this.props.dispatch(
      //   loginAction(email, password, this.handleLoginResponse)
      // );
     
    }
    // alert("This should login")
  };

  handleLoginResponse = response => {
    this.props.dispatch(setLoadingAction(false));
    if (response.msg == "Successfully logged in.") {
      // this.props.dispatch(signupResponseAction(response));

      this.goHome();
      return;
      
    } else {
      alert(response.msg);
    }
  };

  componentWillMount() {
    const { store } = this.props;
    // alert(JSON.stringify(this.props))
    if (store && store.user) {
      // this.goHome();
    }
    
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      // <ImageBackground
      //   source={require("../../../assets/images/splash.jpg")}
      //   style={{ flex: 1, width: null, height: null}}
      //   resizeMode={"cover"}
      //   blurRadius={1}
      //   >
        <ScrollView
          keyboardShouldPersistTaps="never"
          contentContainerStyle={styles.view}
          endFillColor="white"
        >
          <View style={{}}>
            <Image
              source={require("../../../assets/icons/logo.png")}
              style={styles.image}
              resizeMode="contain"
            />

          </View>
          <View style={{ marginTop: -100, marginBottom: 20}}>
            
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textInput}
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              placeholder=" Email"
              placeholderTextColor="black"
              ref="email"
              maxLength={255}
              keyboardType="email-address"
              onSubmitEditing={() => this.refs.password.focus()}
            />
            
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textInput}
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              placeholder=" Password"
              placeholderTextColor="black"
              secureTextEntry={true}
              maxLength={30}
              ref="password"
              onSubmitEditing={this.login}
            />
          </View>
          <View style={{}}>

            <Button text="Sign in" style={styles.Button} onPress={this.login} />

            <View style={styles.signUpContainer}>
              
              <TouchableOpacity
                style={styles.signUpContainer}
                onPress={() => navigate("SignUpNavigator")}
              >
                <ScalableText style={styles.text}>
                  {"Create an account"}
                </ScalableText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.signUpContainer}
                // onPress={() => navigate("ResetPassword")}
                onPress={() => alert("This should reset password")}
              >
                <ScalableText style={styles.text}>
                  Forgot password?
                </ScalableText>
              </TouchableOpacity>

            </View>
            
          </View>
          <View style={{height: 0}}/>
        </ScrollView>
        // </ImageBackground>
    );
  }
}
export const Login = connect(mapStateToProps)(LoginScreen);
