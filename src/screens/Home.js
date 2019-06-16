import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/CustomStyles";
import Header from "../components/Header";
import Button from "../components/Button";

class Home extends Component {
  // Providing the react-navigation properties
  static navigationOptions = {
    title: "Quizzr"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.childContainer}>
          <Image
            style={styles.quizImage}
            source={require("../../res/quiz_image.png")}
          />
          <Text style={styles.homeScreenHeadlineText}>
            You will be presented with 10 "True" or "False"questions.
          </Text>
          <Text style={styles.homeScreenSubtitleText}>Can you score 100%?</Text>
          <Button
            caption="BEGIN"
            marginTop={40}
            width={350}
            borderRadius={30}
            height={50}
            textColor="#50399F"
            buttonColor="#FFF"
            onButtonPress={() => navigate("Quiz")}
          />
        </View>
      </View>
    );
  }
}

export default Home;
