import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DisplayEditScreen from "./src/screens/DisplayEditScreen";
import DisplayCreateScreen from "./src/screens/DisplayCreateScreen";
import DisplayIndexScreen from "./src/screens/DisplayIndexScreen";
import DisplayPostScreen from "./src/screens/DisplayPostScreen";
import { Provider as BlogPostProvider } from "./src/context/BlogPostContext";

const navigator = createStackNavigator(
  {
    Index: DisplayIndexScreen,
    Post: DisplayPostScreen,
    Create: DisplayCreateScreen,
    Edit: DisplayEditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "CRUD APP",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogPostProvider>
      <App />
    </BlogPostProvider>
  );
};
