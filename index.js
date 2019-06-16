/*  Author: Glaydson Costa
 *  Project Name: "Quizzr"
 *  Date: Jun 13, 2019
 */

// Boilerplate code
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
// Importing routes
import Routes from "./src/screens/Index";

AppRegistry.registerComponent(appName, () => Routes);
