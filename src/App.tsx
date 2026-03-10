import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScanScreen from "./navigation/screens/ScanScreen";
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={require("./assets/avatar.png")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.title}>Your Insights</Text>

      <View style={styles.grid}>

        {/* Scan */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Scan")}
        >
          <Image source={require("./assets/scan.png")} />
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        {/* Counterfeits */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconBox}>
            <Image
              source={require("./assets/count1.png")}
              style={styles.rectangle}
            />
            <Image
              source={require("./assets/count.png")}
              style={styles.frame}
            />
          </View>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeited 32</Text>
        </TouchableOpacity>

        {/* Success */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconBox}>
            <Image
              source={require("./assets/success1.png")}
              style={styles.rectangle}
            />
            <Image
              source={require("./assets/success.png")}
              style={styles.frame}
            />
          </View>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </TouchableOpacity>

        {/* Directory */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconBox}>
            <Image
              source={require("./assets/lich1.png")}
              style={styles.rectangle}
            />
            <Image
              source={require("./assets/lich.png")}
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  },
});