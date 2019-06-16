import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles/CustomStyles";

class QuestionHeader extends Component {
  // Default constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.questionHeader}>
        <Text style={{ color: "#C7C7C7", fontWeight: "bold", fontSize: 20 }}>
          Topic
        </Text>
        <Text style={styles.questionHeadLineText}>
          {this.props.questionText}
        </Text>
      </View>
    );
  }
}

export default QuestionHeader;
