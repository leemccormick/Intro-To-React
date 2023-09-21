import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import JsxExerciseComponentScreen from "./src/screens/JsxExerciseComponentScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    JsxComponent: JsxExerciseComponentScreen,
  },
  {
    initialRouteName: "JsxComponent",
    defaultNavigationOptions: {
      title: "Working with content App",
    },
  }
);

export default createAppContainer(navigator);
