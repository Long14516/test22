import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={require("../image/avatar.png")}
          style={styles.avatar}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Your Insights</Text>

      {/* Grid */}
      <View style={styles.grid}>
        
        <TouchableOpacity style={styles.card}>
          <Image source={require("../image/scan.png")}/>
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
      <View style={styles.iconBox}>
  <Image
    source={require("../image/count1.png")}
    style={styles.rectangle}
  />

  <Image
    source={require("../image/count.png")}
    style={styles.frame}
  />
</View>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeited 32</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
                         <View style={styles.iconBox}>
  <Image
    source={require("../image/success1.png")}
    style={styles.rectangle}
  />

  <Image
    source={require("../image/success.png")}
    style={styles.frame}
  />
</View>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
                                   <View style={styles.iconBox}>
  <Image
    source={require("../image/lich1.png")}
    style={styles.rectangle}
  />

  <Image
    source={require("../image/lich.png")}
    style={styles.frame}
  />
</View>
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSub}>History 26</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hello: {
    fontSize: 24,
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    color: "gray",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  card: {
    width: "48%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3,
  },

  icon: {
    fontSize: 30,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  cardSub: {
    fontSize: 12,
    color: "gray",
    marginTop: 4,
  },
  iconBox: {
  width: 60,
  height: 60,
  justifyContent: "center",
  alignItems: "center",
},

rectangle: {
  width: 60,
  height: 60,
  borderRadius: 15,
},

frame: {
  width: 25,
  height: 25,
  position: "absolute",
}
});