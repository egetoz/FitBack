import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AcilisButonu = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}> Spora Başla </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
      alignSelf: 'center',
      color: '#063578',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
    },
    buttonStyle: {
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'black',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      padding: 3,
    }
};

export default AcilisButonu;
