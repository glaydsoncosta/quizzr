import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/CustomStyles";
import ScoreHeader from "../components/ScoreHeader";
import Button from "../components/Button";
import ResultList from "../components/ResultList";
import axios from "axios";

const Consts = require("../utils/Consts");

class Results extends Component {
  // Providing the react-navigation properties
  static navigationOptions = {
    title: "Results"
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainerQuiz}>
        <ScoreHeader headerText={this.props.navigation.state.params.currentState.correct + " / " + this.props.navigation.state.params.currentState.questionList.length}/>
        <View style={styles.resultListContainer}>
          <Text style={{ color: "#C7C7C7", fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>See your results</Text>
          <ResultList questionList={this.props.navigation.state.params.currentState.answerList} />
          <Button
            caption="PLAY AGAIN?"
            marginTop={40}
            width={350}
            borderRadius={30}
            height={50}
            textColor="#FFF"
            buttonColor="#50399F"
            onButtonPress={() => navigate("Home")}
          />
        </View>
      </View>
    );
  }
}

export default Results;
