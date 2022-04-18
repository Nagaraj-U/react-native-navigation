import React from "react";
import { StyleSheet, Image } from "react-native";
function UserImage(props) {
  return (
    <Image style={styles.itemImageStyle} source={{ uri: props.imageUrl }} />
  );
}

export default UserImage;

const styles = StyleSheet.create({
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 30,
  },
});
