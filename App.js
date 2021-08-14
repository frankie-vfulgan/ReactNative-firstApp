import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.header}>
            Edit Profile
          </Text>
        </View>

        <View style={{
          borderBottomColor: "#b0b8b7",
          borderBottomWidth: 2,
          width: "100%",
          }}
        />  
      </View>

      <View style={styles.imageContainer}>
        <Image source={require("./assets/profile.jpg")} styles={styles.image} />  
      </View>

      <View style={styles.detailsContainer}>
        <View styles={styles.details}>
          <Text style={styles.label}>School</Text>
          <Text style={styles.labelInfo}>Codetrain Academy</Text>
        </View>

        <View styles={styles.details}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.labelInfo}>d.hollowind@gmail.com</Text>
        </View>

        <View styles={styles.details}>
          <Text style={styles.labelName}>Name</Text>
          <Text style={styles.labelContent}>Frankie Norman Vfülgan</Text>
        </View>
        
        <View
          style={{
            borderBottomColor: "#b0b8b7",
            borderBottomWidth: 1,
            marginBottom: 10,
            marginHorizontal: 30,
          }}
        />
        
        <View styles={styles.details}>
          <Text style={styles.labelName}>Nick Name</Text>
          <Text style={styles.labelContent}>fnomad</Text>
        </View>

        <View
          style={{
            borderBottomColor: "#b0b8b7",
            borderBottomWidth: 1,
            marginBottom: 10,
            marginHorizontal: 30,
          }}
        />

        <View styles={styles.details}>
          <Text style={styles.labelName}>Emergency Contact</Text>
          <Text style={styles.labelContent}>+233 547602796</Text>
        </View>

        <View
          style={{
            borderBottomColor: "#b0b8b7",
            borderBottomWidth: 1,
            marginHorizontal: 30,
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  headerContainer:{
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  imageContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  detailsContainer: {
    flex: 0.6,
  },

  details: {
    marginVertical: 5,
  },

  label: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 4,
    marginHorizontal: 30,
  },

  labelInfo: {
    fontSize: 15,
    marginBottom: 6,
    marginHorizontal: 30,
  },

  labelContent: {
    fontSize: 15,
    marginBottom: 5,
    marginHorizontal: 30,
  },

  labelName: {
    color: "#1da0cc",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
    marginHorizontal: 30.
  },

  buttonContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginBottom: 30,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1da0cc",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight:"bold",
  }
});
