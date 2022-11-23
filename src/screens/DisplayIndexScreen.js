import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as BlogPostContext } from "../context/BlogPostContext";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const DisplayIndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogPostContext);

  console.log(FlatList);

  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,1)", "rgba(22, 17, 47, 1)"]}
        style={styles.background}
      />
      <Text style={styles.titleStyle}>MY BLOG POSTS</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPostState) => blogPostState.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Post", { id: item.id })}
            >
              <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>
                  {item.title} - ID # {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <MaterialCommunityIcons
                    name="delete-forever"
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

DisplayIndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <MaterialIcons name="add-box" style={styles.plusIconStyle} />
      </TouchableOpacity>
    ),
  };
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
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    margin: 20,
  },
  viewStyle: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    paddingVertical: 10,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
  },
  iconStyle: {
    fontSize: 24,
    color: "white",
  },
  plusIconStyle: {
    fontSize: 30,
    color: "black",
    marginHorizontal: 40,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#cccc",
  },
});

export default DisplayIndexScreen;
