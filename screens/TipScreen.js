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
export default class TipScreen extends Component {
    render(){
        return(
            <View>
                 <MyHeader text={'Tips'} />
                
                <Text>Try to hang your keys in a specific place</Text>
                <Text>Keep everything in an orgqanized manner, It will help you to save your time</Text>
                <Text>Keep your documents and important stuff in your cupboard</Text>
                <Text>Note down the important grocery to buy</Text>
            </View>
        )
    }
    
}