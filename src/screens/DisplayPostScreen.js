import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogPostContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DisplayPostScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.viewContainerStyle}>
      <Text style={styles.viewContainerStyle}>{blogPost.title}</Text>
      <Text style={styles.viewContainerStyle}>{blogPost.content}</Text>
    </View>
  );
};
DisplayPostScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <MaterialCommunityIcons name="note-edit" style={styles.editIconStyle} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  viewContainerStyle: {
    backgroundColor: "black",
    color: "white",
    width: "100%",
    height: "100%",
  },
  titleStyle: {
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center",
  },
  editIconStyle: {
    fontSize: 30,
    color: "black",
    marginHorizontal: 40,
  },
});

export default DisplayPostScreen;
