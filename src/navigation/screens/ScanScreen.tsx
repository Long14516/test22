import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ScanScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ fontSize: 20 }}>←</Text>
      </TouchableOpacity>

      {/* PRODUCT IMAGE */}
      <Image
        source={require("../../assets/juice.png")}
        style={styles.image}
      />

      {/* SCAN FRAME */}
      <View style={styles.scanFrame}>
        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />
      </View>

      {/* PRODUCT CARD */}
      <View style={styles.card}>

        <Image
          source={require("../../assets/juice.png")}
          style={styles.smallImage}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>Lauren’s</Text>
          <Text style={styles.name}>Orange Juice</Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={{ color: "white", fontSize: 24 }}>+</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: "#d9cdbf",
  alignItems: "center",
  justifyContent: "center",
},

backBtn:{
  position:"absolute",
  top:60,
  left:20,
  backgroundColor:"#eee",
  width:40,
  height:40,
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center"
},

image:{
  width:250,
  height:420,
  resizeMode:"contain"
},

/* SCAN FRAME */

scanFrame:{
  position:"absolute",
  width:260,
  height:420
},

corner:{
  position:"absolute",
  width:40,
  height:40,
  borderColor:"white"
},

topLeft:{
  top:0,
  left:0,
  borderLeftWidth:4,
  borderTopWidth:4,
  borderRadius:10
},

topRight:{
  top:0,
  right:0,
  borderRightWidth:4,
  borderTopWidth:4,
  borderRadius:10
},

bottomLeft:{
  bottom:0,
  left:0,
  borderLeftWidth:4,
  borderBottomWidth:4,
  borderRadius:10
},

bottomRight:{
  bottom:0,
  right:0,
  borderRightWidth:4,
  borderBottomWidth:4,
  borderRadius:10
},

/* CARD */

card:{
  position:"absolute",
  bottom:40,
  backgroundColor:"white",
  width:"85%",
  borderRadius:20,
  flexDirection:"row",
  alignItems:"center",
  padding:15
},

smallImage:{
  width:40,
  height:60,
  marginRight:10
},

brand:{
  color:"gray",
  fontSize:12
},

name:{
  fontSize:16,
  fontWeight:"bold"
},

addBtn:{
  backgroundColor:"#5B6CF9",
  width:40,
  height:40,
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center"
}

});