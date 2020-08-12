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
export default class GroceryScreen extends Component {
  render(){
    return(
        <View>
           <MyHeader text={'Grocery'} />
            <Text style={{fontSize:20}}>GROCERY</Text>
             <Image 
    source={require('../assets/grocery.png')}
    style={{width:200, height:100}}
     />
  <TextInput
                style={styles.TextInput}
                placeholder={"LIST OF STOCKED GROCERY"}
               multiline={true} />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>EXSISTING ONES</Text>
          </TouchableOpacity>

          <TextInput
                style={styles.TextInput}
                placeholder={"LIST OF REQUIRED GROCERY"}
              multiline={true}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>REQUIRED ONES</Text>
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