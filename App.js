import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DisplayIndexScreen from "./src/screens/DisplayIndexScreen";
import { BlogPostProvider } from "./src/context/BlogPostContext";

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

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogPostProvider>
      <App />
    </BlogPostProvider>
  );
};
