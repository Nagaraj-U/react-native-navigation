import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import UserImage from "../components/UserImage";
import LoadingIndicator from "../components/LoadingIndicator";
import UserInfoCard from "../components/UserInfoCard";

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const getUsers = () => {
    setIsLoading(true);
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=10`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers([...users, ...data.results]);
        setIsLoading(false);
      });
  };
  const { navigation } = props;
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ItemDetails", {
            title: item.name.title,
            firstName: item.name.first,
            lastName: item.name.last,
            email: item.email,
          })
        }
      >
        <View style={styles.itemWrapper}>
          <UserImage imageUrl={item.picture.large} />
          <UserInfoCard
            title={item.name.title}
            firstName={item.name.first}
            lastName={item.name.last}
            email={item.email}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderLoader = () => {
    return isLoading ? <LoadingIndicator /> : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.email}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});

export default Home;
