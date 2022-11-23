import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context } from "../context/BlogPostContext";
import Form from "../components/Form";

const DisplayCreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>CREATE SCREEN</Text>
      <Form
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate("Index"));
        }}
      />
    </View>
  );
};

export default DisplayCreateScreen;
