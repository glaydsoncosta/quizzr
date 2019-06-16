/*  Author: Glaydson Costa
 *  Purpose: Centralize reusable application styles
 *  Date: Jun 13, 2019
 */
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //Containers and sections
  mainContainer: {
    flex: 1,
    backgroundColor: "#5D4A9D"
  },
  mainContainerQuiz: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerContainer: {
    flexDirection: "row",
    height: 80,
    marginTop: 20
  },
  avatarSection: {
    width: 20,
    marginLeft: 20
  },
  userAvatar: {
    height: 50,
    width: 50,
    borderRadius: 22
  },
  userSection: {
    marginLeft: 30
  },
  quizImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain"
  },
  questionHeader: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  questionCardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  questionCard: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingBottom: 30,
    paddingTop: 30,
    paddingRight: 15,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#C7C7C7",
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  progressIndicatorContainer: {
    paddingBottom: 20
  },
  questionButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  },
  resultListContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20
  },
  listItem: {
    marginBottom: 10
  },
  listItemCategory: {
    marginTop: 10
  },
  listItemAnswer: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#A6A6A6"
  },

  // Texts
  welcomeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginLeft: 10
  },
  userNameText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
    marginLeft: 10
  },
  homeScreenHeadlineText: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 20
  },
  homeScreenSubtitleText: {
    color: "#FFF",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "normal",
    justifyContent: "center"
  },
  questionHeadLineText: {
    color: "#5D4A9D",
    fontSize: 30,
    fontWeight: "bold"
  },
  questionText: {
    color: "#5D4A9D",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center"
  },
  progressIndicatorText: {
    fontSize: 16,
    fontWeight: "bold"
  },

  // Buttons
  defaultButton: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 350,
    flexDirection: "row"
  },
  defaultButtonText: {
    color: "#50399F",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center"
  },
  defaultQuestionButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center"
  }
});

export default styles;
