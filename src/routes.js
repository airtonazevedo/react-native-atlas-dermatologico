import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './pages';
import Doenca from './pages/doenca'

const App = createStackNavigator(
  {
    Home,
    Doenca
   // Vendas,
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: "Atlas Dermatológico",
        headerStyle: {
            backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    }
  }
)

export default createAppContainer(App);