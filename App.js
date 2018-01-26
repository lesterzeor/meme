import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import RootNavigation from "./navigation/RootNavigation";
import SplashScreen from "./screens/LoginScreen.js";
import { Spinner } from "nachos-ui";
import {
  Container,
  Text,
  Button,
  Thumbnail,
  Header,
  Content,
  Input,
  Icon,
  Item
} from "native-base";

export default class App extends React.Component {
  state = {
    isLoading: true
  };
  componentWillMount() {
    setTimeout(
      function() {
        this.setState({ isLoading: false });
      }.bind(this),
      200
    );
  }
  render() {
    return (
      <Container style={styles.container}>
        {this.state.isLoading ? <Spinner /> : <SplashScreen />}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: "rgba(0,0,0,0.2)"
  }
});
