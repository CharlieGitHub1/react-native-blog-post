import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

const DisplayPostScreen = () => {
  return (
    <View style={styles.viewContainerStyle}>
      <Text style={styles.viewContainerStyle}>
        This screen will be displaying a post
      </Text>
    </View>
  );
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
});

export default DisplayPostScreen;