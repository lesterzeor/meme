import React from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import RootNavigation from "../navigation/RootNavigation";

import { RkButton, RkTextInput, RkAvoidKeyboard } from "react-native-ui-kitten";
import * as firebase from "firebase";
import Home from "../screens/Home.js";
import { showLoginForm, showRegisterForm } from "../helpers/helpers.js";
import { Container, Text, Form, Label, Button, TabHeading, Thumbnail, Header, Content, Input, Icon, Tabs, Tab, Item } from "native-base";
export default class SplashScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      FormActive: false,
      LoginFormActive: false,
      RegisterFormActive: false,
      authenticating: false,
      user: null,
      registerError: "",
      loginError: "",
      loading: false,
      registerForm: false
    };
  }

  componentWillMount() {
    setTimeout(
      function() {
        this.setState({ chartLoading: true });
      }.bind(this),
      2000
    );
    const firebaseConfig = {
      apiKey: "AIzaSyAFQLXVW1PStpa6eZ_EO47Fwg8lSOYBXSg",
      authDomain: "meme-c834c.firebaseapp.com",
      databaseURL: "https://meme-c834c.firebaseio.com",
      projectId: "meme-c834c",
      storageBucket: "meme-c834c.appspot.com",
      messagingSenderId: "68471574939"
    };
    firebase.initializeApp(firebaseConfig);
  }

  onPressSignIn() {
    this.setState({
      authenticating: true
    });
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user =>
        this.setState({
          authenticating: false,
          user,
          error: ""
        })
      )

      .catch(error => {
        this.setState({
          authenticating: false,
          user: null,
          loginError: error.message
        });
      });
  }
  getUsers() {
    const { email, password } = this.state;
    var database = firebase.database();
    var ref = database.ref("users");
    ref.on("value", function(snapshot) {
      console.log(snapshot);
    });
  }
  onPressRegister() {
    this.setState({
      authenticating: true
    });

    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user =>
        this.setState({
          authenticating: false,
          user,
          error: ""
        })
      )

      .catch(error => {
        this.setState({
          authenticating: false,
          user: null,
          registerError: error.message
        });
      });
  }
  onPressLogOut() {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          this.setState({
            email: "",
            username: "",
            password: "",
            authenticating: false,
            user: null
          });
        },
        error => {
          console.error("Sign Out Error", error);
        }
      );
  }

  render() {
    // console.log("Current user ", this.state.user);
    if (this.state.authenticating) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    if (this.state.user !== null) {
      return <Home userList={this.state.userList} logout={this.onPressLogOut.bind(this)} getUsers={this.getUsers.bind(this)} userData={this.state.user} />;
    }
    return (
      <View style={styles.container}>
        {this.state.FormActive ? (
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={email => this.setState({ email })} value={this.state.email} autoCorrect={false} autoCapitalize={"none"} label="Email" />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input onChangeText={password => this.setState({ password })} value={this.state.password} autoCorrect={false} autoCapitalize={"none"} secureTextEntry label="Password" />
            </Item>

            {this.state.LoginFormActive ? (
              //Long in form
              <View>
                <Text style={{ marginTop: 10, marginBottom: 20, marginLeft: 15, color: "red", fontSize: 12 }}>{this.state.loginError}</Text>
                <Button style={{ backgroundColor: "skyblue", marginLeft: 15 }} onPress={() => this.onPressSignIn()} block light>
                  <Text style={{ color: "white" }}> Sign in </Text>
                </Button>

                <Text onPress={() => this.setState({ LoginFormActive: false, FormActive: true })} style={{ fontWeight: "600", color: "black", marginLeft: 15, marginTop: 20 }}>
                  Create an account
                </Text>
              </View>
            ) : (
              // Registration form
              <View>
                <Text style={{ marginLeft: 15, marginTop: 10, marginBottom: 20, color: "red", fontSize: 12 }}>{this.state.registerError}</Text>
                <Button style={{ backgroundColor: "orange", marginLeft: 15 }} onPress={() => this.onPressRegister()} block light>
                  <Text style={{ color: "white" }}> Sign Up & Accept</Text>
                </Button>

                <Text onPress={() => this.setState({ LoginFormActive: true, FormActive: true })} style={{ fontWeight: "600", color: "black", marginLeft: 15, marginTop: 20 }}>
                  Already registered? Log in
                </Text>
              </View>
            )}
          </Form>
        ) : (
          <View style={styles.intro}>
            <Button onPress={() => this.setState({ LoginFormActive: true, FormActive: true })} style={styles.Loginbutton} full>
              <Text>LOGIN</Text>
            </Button>
            <Button onPress={() => this.setState({ LoginFormActive: false, FormActive: true })} style={styles.RegisterButton} full>
              <Text>REGISTER</Text>
            </Button>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  intro: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%"
  },
  form: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "white",
    width: 250
  },
  Loginbutton: {
    backgroundColor: "skyblue",
    padding: 50,
    height: 75,
    width: "100%"
  },
  RegisterButton: {
    backgroundColor: "orange",
    padding: 50,
    height: 75,
    width: "100%"
  }
});
