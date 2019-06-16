import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "../../src/styles/CustomStyles";

class Header extends Component {
  // Default constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.avatarSection}>
          <Image
            style={styles.userAvatar}
            source={require("../../res/avatar.png")}
          />
        </View>
        <View style={styles.userSection}>
          <Text style={styles.welcomeText}>{this.props.greetText}</Text>
          <Text style={styles.userNameText}>{this.props.userName}</Text>
        </View>
      </View>
    );
  }
}

export default Header;
