import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context as BlogPostContext } from "../context/BlogPostContext";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DisplayPostScreen = () => {
  const { state, addBlogPost } = useContext(BlogPostContext);

  console.log(FlatList);

  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,1)", "rgba(22, 17, 47, 1)"]}
        style={styles.background}
      />
      <Text style={styles.titleStyle}>
        This screen will be displaying a post
      </Text>
      <Button title="Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPostState) => blogPostState.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle}>
              <MaterialCommunityIcons
                name="delete-forever"
                size={24}
                color="black"
              />
              <Text style={styles.textStyle}>{item.title}</Text>
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
  },
  viewStyle: {
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 4,
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#cccc",
  },
});

export default DisplayPostScreen;
