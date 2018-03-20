import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const GirisButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
      alignSelf: 'center',
      color: '#063578',
      fontSize: 25,
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
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      padding: 3,
    }
};

export default GirisButton;
