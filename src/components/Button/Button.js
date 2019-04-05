import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";
import ScalableText from "react-native-text";

export class Button extends Component {
  render() {
    const { fill, text, style, textStyle, onPress, disabled } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          disabled={disabled}
          onPress={onPress}
          style={[styles.body, style]}
        >
          <ScalableText style={[styles.text, textStyle]}>{text}</ScalableText>
        </TouchableOpacity>
      </View>
    );
  }
}
