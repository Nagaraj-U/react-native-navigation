import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
function LoadingIndicator() {
  return (
    <View style={styles.loaderStyle}>
      <ActivityIndicator size="large" color="#aaa" />
    </View>
  );
}

export default LoadingIndicator;

const styles = StyleSheet.create({
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});
