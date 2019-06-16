import axios from "axios";

const Consts = require("../utils/Consts");

// Helper function to load questions
function loadQuestions() {
  return new Promise(resolve => {
    axios
      .get(Consts.BASE_URL)
      .then(response => {
        resolve(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  });
}

export { loadQuestions };
