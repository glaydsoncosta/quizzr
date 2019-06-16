import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../../src/styles/CustomStyles";

class Button extends Component {
  // Default constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ marginTop: this.props.marginTop }}>
        <TouchableOpacity
          style={{
            backgroundColor: this.props.buttonColor,
            borderRadius: this.props.borderRadius,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            height: this.props.height,
            width: this.props.width,
            flexDirection: "row"
          }}
          onPress={this.props.onButtonPress}
        >
          <Text
            style={{
              color: this.props.textColor,
              fontSize: 18,
              fontWeight: "bold",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            {this.props.caption}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Button;
