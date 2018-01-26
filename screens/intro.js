import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text, Button } from "native-base";

export default class Intro extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() =>
            this.setState({ LoginFormActive: true, FormActive: true })
          }
          style={styles.button}
          full
        >
          <Text>Login</Text>
        </Button>
        <Button
          onPress={() =>
            this.setState({ LoginFormActive: false, FormActive: true })
          }
          style={styles.button}
          full
        >
          <Text>Register</Text>
        </Button>
      </View>
    );
  }
}
