import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../../src/styles/CustomStyles";

class QuestionButton extends Component {
  // Default constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ marginTop: this.props.marginTop }}>
        <TouchableOpacity
          style={{
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 160,
            marginRight: 10,
            backgroundColor: this.props.backgroundColor
          }}
          onPress={this.props.onButtonPress}
        >
          <Text style={styles.defaultQuestionButtonText}>
            {this.props.caption}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuestionButton;
