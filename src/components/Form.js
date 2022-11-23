import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

const Form = ({ onSubmit, initVal }) => {
  const [title, setTitle] = useState(initVal.title);
  const [content, setContent] = useState(initVal.content);

  return (
    <View style={styles.viewContainerStyle}>
      <Text style={styles.labelStyle}>TITLE</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Enter Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.labelStyle}>CONTENT</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Enter Content"
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title={"Save Post"} onPress={() => onSubmit(title, content)} />
    </View>
  );
};

Form.defaultProps = {
  initVal: {
    title: "",
    content: "",
  },
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
  inputStyle: {
    fontSize: 18,
    backgroundColor: "white",
    height: 40,
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 4,
  },
  labelStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    margin: 15,
  },
});

export default Form;
