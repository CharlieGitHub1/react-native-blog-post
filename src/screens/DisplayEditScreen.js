import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/BlogPostContext";
import Form from "../components/Form";

const DisplayEditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Form
        initVal={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    </View>
  );
};

export default DisplayEditScreen;
