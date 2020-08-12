import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import HouseholdScreen from './screens/HouseholdScreen';
import GroceryScreen from './screens/GroceryScreen';
import PsitemScreen from './screens/PsitemScreen';
import PasswordScreen from './screens/PasswordScreen';
import TipScreen from './screens/TipScreen';
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
const  switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
 HomeScreen:{screen:HomeScreen},
 HouseholdScreen:{screen:HouseholdScreen},
 GroceryScreen:{screen:GroceryScreen},
 PsitemScreen:{screen:PsitemScreen},
 PasswordScreen:{screen:PasswordScreen},
 TipScreen:{screen:TipScreen},
})
const AppContainer =  createAppContainer(switchNavigator);
