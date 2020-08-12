import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';


export default class MyHeader extends Component{
render(){
    return(
        <Header
          leftComponent={<Icon name='home' type='font-awesome' color='#ffffff'  onPress={() => {this.props.navigation.navigate('HomeScreen')}}/>}
          centerComponent={{ text: this.props.text, style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
          rightComponent={<Icon name='bell' type='font-awesome' color='#ffffff' onPress={() => {this.props.navigation.navigate('TipScreen')}}/>} 
          backgroundColor = "#32867d"
        />

)
}
}

