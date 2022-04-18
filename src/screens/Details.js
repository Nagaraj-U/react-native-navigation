import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
function Details({ navigation, route }) {
  //automatically sent by navigator
  console.log(route);
  return (
    <View style={styles.container}>
      <Text>Welcome to details page</Text>
      <Button
        style={styles.btnStyle}
        title="back to home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
