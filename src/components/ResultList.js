import React, { Component } from "react";
import { Text, View, Image, FlatList } from "react-native";
import styles from "../styles/CustomStyles";
import ListItem from "../components/ListItem";

class ResultList extends Component {
  // Default constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList style={{ height: 400}}
        data={this.props.questionList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem category={item.category} 
                    question={item.question} 
                    correctAnswer={item.correctAnswer} 
                    userAnswer={item.userAnswer}
                    itemColor={item.correct == true ? "#66BB6A" : "#E57373" }/>
        )}
      />
    );
  }
}

export default ResultList;
