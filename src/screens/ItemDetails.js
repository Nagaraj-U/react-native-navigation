import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const ItemDetails = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>FirstName - {route.params.firstName}</Text>
      <Text style={styles.textStyle}>LastName - {route.params.lastName}</Text>
      <Text style={styles.textStyle}>Email - {route.params.email}</Text>
      <Button
        style={styles.btnStyle}
        title="back to home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default ItemDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    marginTop: 20,
    fontWeight: "600",
    fontSize: 16,
  },
  btnStyle: {
    marginTop: 30,
    paddingTop: 20,
  },
});
