import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DisplayIndexScreen from "./src/screens/DisplayIndexScreen";

const navigator = createStackNavigator(
  {
    Index: DisplayIndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "CRUD App",
    },
  }
);

export default createAppContainer(navigator);
