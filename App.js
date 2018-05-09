import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';

// VIEWS
import SplashScreen from './views/splash/splash';
import LoginScreen from './views/login/login';
import HomeScreen from './views/home/home';
import DishSelectScreen from './views/dish-select/dish-select';
import StartScreen from './views/start/start';
import ChoicesLevelScreen from './views/choices-level/choices-level';
import FailureScreen from './views/failure/failure';
import SuccessScreen from './views/success/success';
import EndScreen from './views/end/end';

const RootStack = StackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    },
    DishSelect: {
      screen: DishSelectScreen
    },
    Start: {
      screen: StartScreen
    },
    ChoicesLevel: {
      screen: ChoicesLevelScreen
    },
    Failure: {
      screen: FailureScreen
    },
    Success: {
      screen: SuccessScreen
    },
    End: {
      screen: EndScreen
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        height: 0
      },
      headerLeft: null
    }
  }
);

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  //FUNCTION FOR THE FONTS TO LOAD
  async componentDidMount() {
    await Font.loadAsync({
      // Gaegu font
      gaegu: require('./assets/fonts/Gaegu/Gaegu-Regular.ttf'),
      // Kirang Haerang font
      'kirang-haerang': require('./assets/fonts/KirangHaerang/KirangHaerang-Regular.ttf'),
      //Caesar Dressing font
      'caesar-dressing': require('./assets/fonts/CaesarDressing/CaesarDressing-Regular.ttf'),
      //Gloria Hallelujah font
      'gloria-hallelujah': require('./assets/fonts/GloriaHallelujah/Gloria-Hallelujah-Regular.ttf'),
      //Kalam
      kalam: require('./assets/fonts/Kalam/Kalam-Regular.ttf'),
      'kalam-bold': require('./assets/fonts/Kalam/Kalam-Bold.ttf'),
      // Bangers
      bangers: require('./assets/fonts/Bangers/Bangers-Regular.ttf')
    });
    this.setState({
      fontLoaded: true
    });
  }
  render() {
    if (!this.state.fontLoaded) return null;
    return <RootStack />;
  }
}
