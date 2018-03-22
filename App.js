import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './src/LoginForm';


class HomeScreen extends React.Component {
  render() {
    const { appStyle } = styles;
    return (
      <LoginForm style={appStyle} />
    );
  }
}


export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});


const styles = {
  appStyle: {
    backgroundColor: '#282B48',
  },
};
