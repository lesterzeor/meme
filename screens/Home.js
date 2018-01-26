import React from "react";
import { Platform, TextInput, StatusBar, StyleSheet, View } from "react-native";
import { RkButton, RkTextInput, RkAvoidKeyboard } from "react-native-ui-kitten";
import * as firebase from "firebase";
import SplashScreen from "../screens/LoginScreen.js";
import InstagramEmbed from "react-native-instagram-embed";
import { Container, Text, Button, Thumbnail, Header, Tab, Tabs, Body, Left, Image, Right, Card, CardItem, Content, Input, Icon, Item } from "native-base";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      url: "",
      memes: []
    };
  }
  componentWillMount() {
    var database = firebase.database();
    var ref = database.ref("memes");
    ref.on("value", gotData);
    let self = this;
    function gotData(data) {
      let gotmemes = data.val();
      let keys = Object.values(gotmemes);
      self.setState({ memes: keys });
      console.log("these are your meme data ", keys.email);
      keys.map((l, i) => console.log(l.email));
      // for (let i = 0; i < keys.length; i++) {
      //   let k = keys[i];
      //   let caption = gotmemes[k].caption;
      //   let email = gotmemes[k].email;
      //   console.log(caption, email);
      // }
    }
    const memesData = this.state.memes;
    console.log("these are your memedata ", memesData);
    // var refs = database.ref("memes");
    // var data = {
    //   url: "https://www.instagram.com/p/BeUHIOaFTCK/",
    //   email: this.props.userData.email
    // };
    // refs.push(data).then(this.setState({ caption: "", uploadSuccess: "Upload complete" }));
  }
  postMeme() {
    const { url } = this.state;

    var database = firebase.database();
    var ref = database.ref("memes");
    var data = {
      url: url,
      email: this.props.userData.email
    };
    ref.push(data).then(this.setState({ url: "", uploadSuccess: "Upload complete" }));
  }
  render() {
    const memes = this.state.memes;
    const currentUser = this.props.userData.email;
    console.log("current user", currentUser);
    console.log("Your memes", memes);
    // console.log("this is yout list", this.props.userList);
    return (
      <Container>
        <Header hasTabs />
        <Tabs initialPage={1}>
          <Tab heading="Feed">
            <Content>
              {memes.map((l, i) => (
                <Card key={i}>
                  <CardItem cardBody>
                    <InstagramEmbed url={l.url} style={{ width: "100%" }} />
                  </CardItem>
                </Card>
              ))}
            </Content>
          </Tab>
          <Tab heading="My Post">
            <Content>
              {memes.map((l, i) => (
                <View key={i}>
                  {currentUser == l.email ? (
                    <Card>
                      <CardItem cardBody>
                        <InstagramEmbed url={l.url} style={{ width: "100%" }} />
                      </CardItem>
                    </Card>
                  ) : (
                    <View />
                  )}
                </View>
              ))}
            </Content>
          </Tab>
          <Tab heading="Upload">
            <View>
              <TextInput
                onChangeText={url => this.setState({ url })}
                value={this.state.url}
                placeholder="Instagram url (example: https://www.instagram.com/p/BeUHIOaFTCK/)"
                style={{ height: 80, paddingTop: 10, paddingLeft: 5, marginBottom: 10, marginTop: 10 }}
                multiline={true}
                numberOfLines={4}
                editable={true}
                maxLength={500}
              />

              <RkButton onPress={() => this.postMeme()} style={{ marginTop: 50, width: "100%" }}>
                Submit
              </RkButton>
              <Text style={{ marginTop: 10, marginLeft: 30, color: "green", fontSize: 12 }}>{this.state.uploadSuccess}</Text>
            </View>
          </Tab>
          <Tab heading="Profile">
            <View style={styles.container}>
              <Text>Email: {this.props.userData.email}</Text>
              <RkButton onPress={this.props.logout} style={{ marginTop: 10 }}>
                Log out
              </RkButton>
              {memes.map((l, i) => (
                <View key={i}>
                  {currentUser == l.email ? (
                    <Card>
                      <CardItem cardBody>
                        <InstagramEmbed url={l.url} style={{ width: "100%" }} />
                      </CardItem>
                    </Card>
                  ) : (
                    <View />
                  )}
                </View>
              ))}
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
