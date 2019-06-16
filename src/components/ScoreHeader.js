import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles/CustomStyles";

class ScoreHeader extends Component {
  // Default constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.questionHeader}>
        <Text style={{ color: "#C7C7C7", fontWeight: "bold", fontSize: 20 }}>
          You Scored
        </Text>
        <Text style={styles.questionHeadLineText}>
          {this.props.headerText}
        </Text>
      </View>
    );
  }
}

export default ScoreHeader;
