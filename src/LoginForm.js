import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import Card from './Ortak/Card';
import CardSection from './Ortak/CardSection';
import GirisButton from './Ortak/Giriş_Button';
import KaydolButton from './Ortak/kaydol_button';
import FacebookButton from './Ortak/facebookilegiris_button';


class LoginForm extends Component <{}> {
  render() {
    const { inputStyle, firstTextStyle } = styles;
    return (
      <View
      style={{
      flex: 1
      }}
      >
      <Card>
        <View
        style={{
        marginTop: 200,
        }}
        >

          <Text
            style={firstTextStyle}
          > eposta adresinizi ve şifrenizi giriniz. </Text>
        <CardSection>
          <TextInput
            placeholder="e-mail"
            style={inputStyle}
          />
        </CardSection>

        <CardSection>
          <TextInput
            secureTextEntry
            placeholder="Şifre"
            style={inputStyle}
          />
        </CardSection>

        <GirisButton>Giriş</GirisButton>
        <KaydolButton>Kaydol</KaydolButton>
        <FacebookButton>Facebook ile Giriş Yap</FacebookButton>

        </View>
      </Card>
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    backgroundColor: '#20223B',
    color: 'white',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 26,
    lineHeight: 35,
    flex: 1,
    height: 50
  },
  firstTextStyle: {
    textAlign: 'center',
    position: 'relative',
    justifyContent: 'center',
    fontSize: 20,
    color: '#50516D',
  },
};

export default LoginForm;
