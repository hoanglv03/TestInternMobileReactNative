import {
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  Pressable,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import ItemMovie from "./components/ItemMovie";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const fakeData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export default function ListMovie() {
  const API_KEY =
    "https://api.themoviedb.org/3/discover/movie?api_key=26763d7bf2e94098192e629eb975dab0&page=1";
  const [result, setResult] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getMoviesFromApi = async () => {
    try {
      const response = await fetch(API_KEY);
      const json = await response.json();
      setResult(json.results);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setRefreshing(true);
    setResult(fakeData);
    setTimeout(() => {
      getMoviesFromApi();
    }, 1500);
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setResult(fakeData);
    setTimeout(() => {
      getMoviesFromApi();
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      {/* header */}
      <SafeAreaView style={styles.header}>
        <Pressable style={styles.goBack}>
          <AntDesign name="left" size={24} />
          <Text style={styles.titleHeader}>Back</Text>
        </Pressable>
      </SafeAreaView>
      {/* show list movie */}

      <FlatGrid
        itemDimension={130}
        data={result}
        style={styles.gridView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) =>
          refreshing ? (
            <ShimmerPlaceholder
              shimmerStyle={styles.styleLoader}
              shimmerColors={["#bbbdbb", "#d4d4d4", "#bbbdbb"]}
            />
          ) : (
            <ItemMovie item={item} />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 40,
  },
  titleHeader: {
    fontSize: 20,
    marginLeft: 8,
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  styleLoader: {
    height: 260,
    width: "100%",
    borderRadius: 8,
  },
  goBack: { flexDirection: "row", alignItems: "center" },
});
