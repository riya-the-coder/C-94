import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import db from "../config";
import firebase from "firebase";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import MyHeader from "../components/MyHeader";
export default class PasswordScreen extends Component {
    render(){
      return(
        <View>
           <MyHeader text={'Password'} />
          <Text style={{fontSize:20}}>PASSWORDS</Text>
             <Image 
    source={require('../assets/passwords.png')}
    style={{width:100, height:100}}
     />

<TextInput
                style={styles.TextInput}
                placeholder={"PASSWORDS FOR ID, CARDS"}
                multiline={true}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>SAVE</Text>
          </TouchableOpacity>

        </View>
      )
    }
    
}
const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput:{
    width: "75%",
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
  }

})