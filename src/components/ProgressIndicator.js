import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles/CustomStyles";

class ProgressIndicator extends Component {
  // Default constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.progressIndicatorContainer}>
        <Text style={styles.progressIndicatorText}>
          {this.props.currentQuestion + " of " + this.props.totalQuestions}
        </Text>
      </View>
    );
  }
}

export default ProgressIndicator;
