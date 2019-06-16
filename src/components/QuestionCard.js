import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles/CustomStyles";

class QuestionCard extends Component {
  // Default constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{this.props.questionText}</Text>
      </View>
    );
  }
}

export default QuestionCard;
