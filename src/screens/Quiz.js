import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/CustomStyles";
import QuestionHeader from "../components/QuestionHeader";
import Button from "../components/Button";
import QuestionButton from "../components/QuestionButton";
import QuestionCard from "../components/QuestionCard";
import ProgressIndicator from "../components/ProgressIndicator";
import * as Services from "../services/APIRequester";

const Consts = require("../utils/Consts");

class Quiz extends Component {
  // Providing the react-navigation properties
  static navigationOptions = {
    title: "Quiz"
  };

  constructor(props) {
    super(props);
    this.resetState();
  }

  // Fetching data from the API
  fecthData = () => {
    Services.loadQuestions().then(response => {
      this.setState({
        questionList: response,
        totalQuestions: response.length,
        currentQuestion: response[0],
        currentIndex: 1
      });
    });
  };

  // Reusable function to reset the state
  resetState = () => {
    this.state = {
      questionList: [],
      answerList: [],
      currentQuestion: {},
      currentIndex: 0,
      incorrect: 0,
      correct: 0
    };
  };

  // Simple auto-binding function to increment the question index to move forward
  nextQuestion = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      currentQuestion: this.state.questionList[this.state.currentIndex]
    });
  };

  /* 
     Simple auto-binding function to handle whether the user answered "True" or "False"
     In this case, as I'm using a TouchableOpacity "onPress" action, I'm passing the outside function which
     navigates to the results screen as a parameter, this way I can go to the results screen when the user
     answer the last question.
  */
  answerQuestion(answer, navigateFunction) {
    // Stop going to questions if we reach the last one
    if (this.state.currentIndex < this.state.questionList.length) {
      var answerObj = {
        questionIndex: this.state.currentIndex - 1,
        category: this.state.currentQuestion.category,
        question: this.state.currentQuestion.question,
        correctAnswer: this.state.currentQuestion.correct_answer,
        userAnswer: answer,
        correct: this.state.currentQuestion.correct_answer.toString() == answer.toString()
      };
      var answerList = this.state.answerList;
      answerList.push(answerObj);
      if (this.state.currentQuestion.correct_answer.toString() == answer.toString()) {
        this.setState({ correct: this.state.correct + 1, answerList: answerList });
      } else {
        this.setState({ incorrect: this.state.incorrect + 1, answerList: answerList });
      }
      this.nextQuestion();
    } else {
      // Go to results screen
      navigateFunction();
      // Reseting the state and showing results
      this.resetState();
      this.fecthData();
    }
  }

  // Handleling "DidMount" event in order to male internet request
  componentDidMount() {
    this.fecthData();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainerQuiz}>
        <QuestionHeader questionText={ this.state.currentQuestion.category}
        />
        <View style={styles.questionCardContainer}>
          <QuestionCard questionText={this.state.currentQuestion.question} />
          <ProgressIndicator
            currentQuestion={this.state.currentIndex}
            totalQuestions={this.state.questionList.length}
          />
          <View style={styles.questionButtonContainer}>
            <QuestionButton
              caption="TRUE"
              backgroundColor="#43A047"
              marginTop={0}
              onButtonPress={() =>
                this.answerQuestion("True", () =>
                  navigate("Results", { currentState: this.state })
                )
              }
            />
            <QuestionButton
              caption="FALSE"
              backgroundColor="#EF5350"
              marginTop={0}
              onButtonPress={() =>
                this.answerQuestion("False", () =>
                  navigate("Results", { currentState: this.state })
                )
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Quiz;
