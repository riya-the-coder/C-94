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
export default class PsitemScreen extends Component {
  render(){
    return(
      <View>
         <MyHeader text={'Personal Items'} />
        <Text style={{fontSize:20}}>PERSONAL ITEMS</Text>
           <Image 
  source={require('../assets/ps.jpg')}
  style={{width:100, height:100}}
   />
 <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>CAR KEYS</Text>
          </TouchableOpacity>
          <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>WALLET</Text>
          </TouchableOpacity>
          <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>CARDS</Text>
          </TouchableOpacity>
          <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>IMPORTANT DOCUMENTS</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            style={styles.buttons}
            <Text>SUBMIT</Text>
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