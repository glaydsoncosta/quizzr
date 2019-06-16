import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles/CustomStyles";

class ListItem extends Component {
  // Default constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.listItem}>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 20,
            fontWeight: "bold",
            flexWrap: "wrap",
            color: this.props.itemColor
          }}
        >
          {this.props.question}
        </Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.listItemAnswer}>
            Correct Answer: {this.props.correctAnswer}
          </Text>
          <Text style={styles.listItemAnswer}>
            Your Answer: {this.props.userAnswer}
          </Text>
        </View>
      </View>
    );
  }
}

export default ListItem;
