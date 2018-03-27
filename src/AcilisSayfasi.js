import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AcilisButonu from './Ortak/acilisButonu';
import LoginForm from './LoginForm'


class AcilisSayfasi extends React.Component {
  render() {
    const { HeaderStyle, AllStyle } = styles;
    return (
      <View style={AllStyle}>
        <Text style={HeaderStyle}>FITBACK</Text>
        <AcilisButonu
        onPress={() => this.props.navigation.navigate(LoginForm)}
        />
      </View>
    );
  }
}


const styles = {
  AllStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20223B'
  },
  TextStyle: {

  },
  HeaderStyle: {
    fontSize: 90,
    color: 'red'
  },
};
export default AcilisSayfasi;
