import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
function UserInfoCard(props) {
  return (
    <View style={styles.userInfo}>
      <Text
        style={styles.txtNameStyle}
      >{`${props.title} ${props.firstName} ${props.lastName}`}</Text>
      <Text style={styles.txtEmailStyle}>{props.email}</Text>
    </View>
  );
}

export default UserInfoCard;

const styles = StyleSheet.create({
  userInfo: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 18,
  },
  txtEmailStyle: {
    color: "#777",
  },
});
