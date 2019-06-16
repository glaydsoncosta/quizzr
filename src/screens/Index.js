/*  Author: Glaydson Costa
 *  Purpose: Create the application router using "react-navigation"
 *  Date: Jun 13, 2019
 */
import Home from "./Home";
import Quiz from "./Quiz";
import Results from "./Results"

// Using react-navigation to make easy to flow beetween screns
import { createAppContainer, createStackNavigator } from "react-navigation";

// Creating app routing map
const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    Quiz: Quiz,
    Results: Results
  })
);

export default Routes;
