import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export class Logout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Logout Screen</Text>
      </View>
    );
  }
}

export default Logout;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
