import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ScanScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={require("../../image/glass.png")}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>Orange Juice</Text>
        <Text style={styles.brand}>Lauren's</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9cdbf",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 250,
    height: 400,
    resizeMode: "contain",
  },

  info: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    width: "85%",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  brand: {
    color: "gray",
  },
});