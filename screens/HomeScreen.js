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


import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import NavigationContainer from 'react-navigation';
import HouseholdScreen from './HouseholdScreen';
import GroceryScreen from './GroceryScreen';
import PsitemScreen from './PsitemScreen';
import PasswordScreen from './PasswordScreen';
import TipScreen from './TipScreen';
import MyHeader from "../components/MyHeader";

export default class HomeScreen extends Component {
    render(){
      return(
        <View>
          <MyHeader text={'Memory Bank'} />
          <View style={styles.santaView}>
          <Image
          source={require('../assets/hh.png')}
          style={{width:50, height:50}}
           />
      <TouchableOpacity
              style={styles.buttons}
              onPress={() => {this.props.navigation.navigate('HouseholdScreen')}}>
              <Text>HOUSE HOLD</Text>
            </TouchableOpacity>
         </View>
      
        <View style={styles.santaView}>
        <Image
        source={require('../assets/grocery.png')}
        style={{width:50, height:50}}
         />
    <TouchableOpacity
            style={styles.buttons}
            onPress={() => {this.props.navigation.navigate('GroceryScreen')}}>
            <Text>GROCERY</Text>
          </TouchableOpacity>
       </View>
       <View style={styles.santaView}>
        <Image 
        source={require('../assets/ps.jpg')}
        style={{width:50, height:50}}
         />
    <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('PsitemScreen')}>
            <Text>PERSONAL ITEMS</Text>
          </TouchableOpacity>
       </View>
       <View style={styles.santaView}>
        <Image 
        source={require('../assets/pswd.jpg')}
        style={{width:100, height:50}}
         />
    <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('PasswordScreen')}>
            <Text>PASSWORD</Text>
          </TouchableOpacity>
       </View>
       </View>
      )
    }
    
}
const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:100,
    height:100,
  },
  santaView:{
    width:100,
    height:100,
     alignItems: "center",
    justifyContent: "center",
  },

})