import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './src/LoginForm';
import AcilisSayfasi from './src/AcilisSayfasi';


class IlkAcilis extends React.Component {
  render() {
    return (
      <AcilisSayfasi />
    );
  }
}

class GirisYapmaEkrani extends React.Component {
  render() {
    return (
    <LoginForm />
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: IlkAcilis,
    },
    LoginPage: {
      screen: GirisYapmaEkrani,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
