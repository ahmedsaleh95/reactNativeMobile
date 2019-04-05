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
  ImageBackground,
  Modal,
  Dimensions
} from "react-native";
import { Button } from "../../components/Button/Button";
import { NavigationActions, StackActions } from "react-navigation";
import DatePicker from "react-native-datepicker";
import ScalableText from "react-native-text";
import { getAddressAction } from "../../actions/getAddressAction";
import { getCitiesAction } from "../../actions/getCitiesAction";
// import { getAreasAction } from "../../actions/getAreasAction";
import { signupAction } from "../../actions/signupAction";
import { setLoadingAction } from "../../actions/setLoadingAction";
import { connect } from "react-redux";
import CountryPicker from "react-native-country-picker-modal";

import ModalDropdown from 'react-native-modal-dropdown';

import { getStyle } from "./styles";

const styles = getStyle();
const mapStateToProps = state => ({
  store: state
});

class Signup2Screen extends Component {
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
    let params  =  this.props.navigation.state.params;

    let countries = []
    let cities = []
    let areas = []

    // let address = {
    //   countries: [
    //     {
    //       country: "Egypt",
    //       cities: [
    //         {
    //           city: "Alexandria",
    //           areas: [
    //             "Awayed",
    //             "Manchiah",
    //             "Agamy",
    //             "Smouha"
    //           ]
    //         },
    //         {
    //           city: "Cairo",
    //           areas: [
    //             "Ma3adi",
    //             "Mohandesin",
    //             "Zamalek",
    //             "5th district"
    //           ]
    //         },
    //         {
    //           city: "El-Qalyubiah",
    //           areas: [
    //             "Benha",
    //             "---",
    //             "---",
    //           ]
    //         },
    //       ]
    //     },

    //     {
    //       country: "Saudi Arabia",
    //       cities: [
    //         {
    //           city: "Jeddah",
    //           areas: [
    //             "Al-Murjan",
    //             "As-Safa",
    //             "Al-Marwa",
    //           ]
    //         },
    //         {
    //           city: "Al-Riyadh",
    //           areas: [
    //             "Al-Yamamah",
    //             "Nemar",
    //             "Irqah",
    //           ]
    //         },
            
    //       ]
    //     },
        
    //   ]
    // }
    
    this.state = {
      arrowLeft: arrowLeft,
    //   close: close,
      firstName: this.props.navigation.state.params.firstName,
      email: this.props.navigation.state.params.email,
      password: this.props.navigation.state.params.password,
     
      countriesArray: null,
      countries: countries,
      cities: cities,
      areas: areas,

      countryIndex: 0,
      cityIndex: 0,
      // date: null,
    //   date: eighteenYearsAgo,
    //   workAddress: "",
    //   lastFourDigits: "",
    //   npiNumber: "",
    //   licenseNumber: "",
    //   cca2: "US",
    //   callingCode: "1",
    //   number: "",
    //   state_query: "",
    //   license_state: [],
      country: "Country",
      phoneNumber: "",
    //   ZIP: "",
      city: "",
      area: "",
      cca2: "US",
      callingCode: "1",
    //   state: "",
    //   DEA: ""
    showModal: false
    };

    // this.updateCountries(this.state.countryIndex);
    
    // alert(JSON.stringify(params))
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
    // alert("got Address Data")

    alert(JSON.stringify(response));
    if (response.Countries.length > 0) {
      // this.setState({
      //   countriesArray: response.Countries
      // })
      // this.updateCountries(response.Countries)
    } else if (response.msg == "this e-mail is already registered") {
      alert("This e-mail is already registered");
    } else if (response.msg == "User under 18") {
      alert("You are not allowed to register if you are under 18");
    } else {
      alert(JSON.stringify(response));
    }
  }

  handleCallbackAreasData = (response) => {
    // alert("got Address Data")

    alert(JSON.stringify(response));
    if (response.Countries.length > 0) {
      // this.setState({
      //   countriesArray: response.Countries
      // })
      // this.updateCountries(response.Countries)
    } else if (response.msg == "this e-mail is already registered") {
      alert("This e-mail is already registered");
    } else if (response.msg == "User under 18") {
      alert("You are not allowed to register if you are under 18");
    } else {
      alert(JSON.stringify(response));
    }
  }

  updateCountries = (countriesArray) => {

    let { countries } = this.state;
    for (var country of countriesArray) {
      countries.push(country.country)
    }

    this.setState({
      countries: countries,
    })

    // this.updateCities(countryIndex, 0)

  }

  // updateCities = (countryIndex, cityIndex) => {
  //   let { address, countries, cities, areas } = this.state;

  //   cities = []

  //   for(var city of address.countries[countryIndex].cities){
  //     cities.push(city.city)
  //   }

  //   this.setState({
  //     cities: cities,
  //     city: cities[0]
  //   })

  //   this.updateAreas(countryIndex, cityIndex)
  // }

  // updateAreas = (countryIndex, cityIndex) => {
  //   let { address, countries, cities, areas } = this.state;

  //   areas = [] 

  //   for(var area of address.countries[countryIndex].cities[cityIndex].areas){
  //     areas.push(area)
  //   }

  //   this.setState({
  //     areas: areas,
  //     area: areas[0]
  //   })

  // }

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

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  sendSignupRequest = () => {

    this.props.dispatch(setLoadingAction(true));
    
    this.props.dispatch(
      signupAction(
        this.state.firstName,
        this.state.email,
        this.state.password,
        this.state.date,
        this.state.country,
        this.state.city,
        this.state.area,
        this.state.phoneNumber,
        this.handleCallbackData,
      )
    );
  }

  handleCallbackData = (response) => {
    // alert(JSON.stringify(response));
    this.props.dispatch(setLoadingAction(false));
    if (response.msg == "User registered") {
      // alert("Eshta")
      this.setState({
        showModal: true
      })
    } else if (response.msg == "this e-mail is already registered") {
      alert("This e-mail is already registered");
    } else if (response.msg == "User under 18") {
      alert("You are not allowed to register if you are under 18");
    } else {
      alert(JSON.stringify(response));
    }
  }

  goHome = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })],
      key: null
    });
    this.props.navigation.dispatch(resetAction);
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

  searchIdWithName = (array, name) => {

    let result = []
    for (var key of array) {
      if(key.country == name)
        return key.id
    }

    return "-1"
  }

  onPressFlag = () => {
    this.refs.countryPicker.openModal();
  };

  // renderFilter = ({value, onChange, onClose}) => (
  //   <CustomFilterComponent
  //      value={value}
  //      onChange={onChange}
  //      onClose={onClose} 
  //    />
  // )

  renderInfo = () => {
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

        <Modal
          visible={this.state.showModal ? true : false}
          animationType={"slide"}
          transparent={true}
          onRequestClose={() => {
            this.setState({
              showModal: false
            });
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                alignSelf: "center",
                backgroundColor: "white",
                // opacity: 0.9,
                padding: 10,
                margin: 30,
                borderWidth: 0.5,
                borderRadius: 25
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                  padding: 10
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <ScalableText
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontSize: 16,
                      fontWeight: "100",
                      padding: 30,
                      paddingTop: 10
                    }}
                  >
                    {"Thank you for regsitering,\nwe have sent you an email\nwith a link to verfiy your account"}
                  </ScalableText>
                </View>
                <Button
                  onPress={() => {
                      this.setState({
                          showModal: false
                      })
                      this.goHome()
                  }}
                  style={styles.modalButton}
                  text="Got It"
                />
              </View>
            </View>
          </View>
        </Modal>

        <Image
          source={require("../../../assets/icons/logo-edited.png")}
          style={styles.image}
          resizeMode="contain"
          // blurRadius={1}
        />
        
        <View style={{ marginTop: 80, marginBottom: 20, alignItems: "center"}}>

          <DatePicker
            date={this.state.date}
            
            style={{
              marginBottom: 20,
              width: Dimensions.get("window").width/1.6,
              height: 35,
              marginLeft: 0,
              borderWidth: 0.5,
              borderRadius: 7,
              borderColor: "black",
              
            }}
            mode="date"
            placeholder="Date of birth"
            format="MM-DD-YYYY"
            minDate="01-01-1900"
            maxDate={new Date()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            ref="birthdate"
            showIcon={false}
            customStyles={{
              placeholderText:{
                color: "black",
                paddingBottom: 5
              },
              dateInput: {
                borderWidth: 0
              },
              dateTouchBody:{
                borderWidth: 0
              },
              dateText: {
                marginTop: 0,
                paddingHorizontal: 80,
                paddingBottom: 5,
                borderRadius: 7,
                borderColor: "black",
                borderWidth: 0,
                color: "black",
                fontSize: 14,
              }
            }}
            onDateChange={date => {
              this.setState({ date: date });
              // this.refs.country.focus();
            }}
          />

          <View style={styles.phoneContainer}>
            <CountryPicker
              ref="countryPicker"
              style={styles.countryPicker}
              filterable={true}
              showCallingCode={true}
              onChange={value => {
                alert(JSON.stringify(value))
                this.setState({
                  cca2: value.cca2,
                  callingCode: value.callingCode,
                  country: value.name
                });
                this.props.dispatch(
                  getCitiesAction(
                    value.callingCode, 
                    this.handleCallbackAddressData
                  )
                );

              }}
              cca2={this.state.cca2}
              translation="eng"
              closeable
            >
              <View />
            </CountryPicker>
            <TouchableOpacity onPress={this.onPressFlag}>
              <TextInput
                underlineColorAndroid={"transparent"}
                placeholderTextColor="black"
                editable={false}
                style={styles.textInput1}
                value={
                  (this.state.callingCode && this.state.callingCode.length > 0 && this.state.callingCode.charAt(0) === "+" ? "" : "") +
                  this.state.country
                }
                onPress={text => { 
                  text ? 
                  this.setState({ callingCode: text }) 
                  : this.setState({ callingCode: text })
                }}
                keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
              />
            </TouchableOpacity>
            
          </View>

          <ModalDropdown 
            disabled={this.state.countries.length < 1 || this.state.country == ""}
            options={this.state.cities}
            defaultValue={"City"}
            style={{
              borderRadius: 7,
              height: 35,
              marginTop: 5,
              marginBottom: 25,
              borderColor: "black",
              borderWidth: 0.5,
              color: "black",
              textAlign: "center",
              width: Dimensions.get("window").width/1.6
            }}
            dropdownStyle={{
              width: Dimensions.get("window").width/1.6
            }}
            dropdownTextStyle={{
              fontSize: 16,
              alignSelf: "center"
            }}
            textStyle={{
              color: "black",
              alignSelf: "center",
              fontSize: 14,
              padding: 6
            }}
            ref="city"
            onSelect={(index, value) => {
              this.setState({ city: value })
              // this.props.dispatch(
              //   getAreasAction(
              //     index, 
              //     this.handleCallbackAreasData
              //   )
              // );


              // this.updateAreas(this.state.countryIndex, index)
              // this.refs.area.select(-1)
              // this.refs.area.focus()
            } }
          />

          <ModalDropdown 
            disabled={this.state.cities.length < 1 } 
            options={this.state.areas}
            defaultValue={"Area"}
            style={{
              borderRadius: 7,
              height: 35,
              marginTop: 5,
              marginBottom: 25,
              borderColor: "black",
              borderWidth: 0.5,
              color: "black",
              textAlign: "center",
              width: Dimensions.get("window").width/1.6
            }}
            dropdownStyle={{
              width: Dimensions.get("window").width/1.6
            }}
            dropdownTextStyle={{
              fontSize: 16,
              alignSelf: "center"
            }}
            textStyle={{
              color: "black",
              alignSelf: "center",
              fontSize: 14,
              padding: 6
            }}
            ref="area"
            onSelect={value => {
              this.setState({ area: value })
              // this.refs.phone.focus()
            } }
          />

          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            placeholderTextColor="black"
            onChangeText={text => this.setState({ phoneNumber: text })}
            placeholder="Mobile number"
            ref="phone"
            value={this.state.phoneNumber}
            maxLength={35}
            keyboardType={"numeric"}
            onSubmitEditing={() => {}}
          />
        </View>

        <Button text="Signup" style={styles.Button} onPress={()=> {
            this.setState({
                showModal: true
            })
            // this.sendSignupRequest()
            // alert(this.state.date)
        }} />

        <View style={{height: 100}}/>

      </ScrollView>
      
    );
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
   
    );
  }

}
export const Signup2 = connect(mapStateToProps)(Signup2Screen);
