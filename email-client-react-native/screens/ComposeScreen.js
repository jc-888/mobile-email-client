import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class ComposeScreen extends React.Component {
  static navigationOptions = {
    title: "Compose Email"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
            <Text style={styles.getStartedText}>This Is The Compose</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});