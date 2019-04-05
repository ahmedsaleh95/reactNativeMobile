import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import ScalableText from "react-native-text";
import { styles } from "./styles";
import QRCodeScanner from 'react-native-qrcode-scanner';

const mapStateToProps = state => ({
  store: state
});

class TestScreen extends Component {

    static navigationOptions = {
      header: null
    };
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }

    onSuccess(e) {
      alert(e.data)
      // Linking
      //   .openURL(e.data)
      //   .catch(err => alert('An error occured'));
    }
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          showMarker={true}
          reactivate={true}
          topContent={
            <Text style={styles.centerText}>
              Scan your QR code
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>Wait for a few seconds to read</Text>
            </TouchableOpacity>
          }
        />
      );
    }
  }
export const Test = connect(mapStateToProps)(TestScreen);
  