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
import NavigationContainer from 'react-navigation';
import { RFValue } from "react-native-responsive-fontsize";
import MyHeader from "../components/MyHeader";
export default class HouseholdScreen extends Component {
    render(){
        return(
            <View>
               <MyHeader text={'Household'} />
                <Text style={{fontSize:20}}>HOUSE HOLD</Text>
                 <Image 
        source={require('../assets/hh.png')}
        style={{width:100, height:100}}
         />
          <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>LOCKER KEYS</Text>
          </TouchableOpacity>

          <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>CUPBOARD KEYS</Text>
          </TouchableOpacity>

          <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>SPARE KEYS</Text>
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