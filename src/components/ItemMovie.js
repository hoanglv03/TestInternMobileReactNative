import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
export default function ItemMovie({ item }) {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
        style={styles.poster}
      />
      <View style={styles.content}>
        <Text style={styles.textYear}>{item.release_date.slice(0, 4)}</Text>
        <Text style={styles.textTitle}>{item.title}</Text>
      </View>
      {/* showRate */}
      <LinearGradient
        colors={["#F38716", "#E65B44", "#eb072c"]}
        style={styles.boxRate}
      >
        {item.vote_average % 1 === 0 ? (
          <Text style={styles.textRate}>{item.vote_average}</Text>
        ) : (
          <View style={styles.boxRateFloat}>
            <Text style={[styles.textRate,{marginTop:3}]}>
              {item.vote_average.toString().slice(0, 1)}
            </Text>
            <Text style={styles.textRateSecond}>
              .{item.vote_average.toString().slice(2, 3)}
            </Text>
          </View>
        )}
      </LinearGradient>
      {/* shadow inside the box */}
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
        style={styles.gradientOverlay}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-end",
    backgroundColor:'white',
    borderRadius: 10,
    padding: 10,
    height: 260,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    marginHorizontal: 5,
    marginBottom: 5,
    elevation: 7,
  },
  poster: {
    borderRadius: 10,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  textYear: {
    color: "white",
  },
  content: {
    paddingLeft: 8,
    paddingBottom: 8,
    zIndex: 2,
  },
  textTitle: {
    color: "white",
    fontWeight: "bold",
    width: "90%",
    marginTop: 4,
    textTransform: "uppercase",
  },
  boxRate: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "red",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  textRate: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  textRateSecond: {
    fontSize: 14,
    fontWeight: "normal",
    color: "white",
  },
  boxRateFloat: {
    flex: 1,
    flexDirection: "row",
    alignItems:'center'
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
    zIndex: 0,
    borderRadius: 10,
  },
});
