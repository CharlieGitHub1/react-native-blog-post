import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DisplayEditScreen = () => {
  return (
    <View style={styles.viewContainerStyle}>
      <Text style={styles.viewContainerStyle}>
        This screen is for editing your post
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

export default DisplayEditScreen;
