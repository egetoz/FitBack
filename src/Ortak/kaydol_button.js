import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const KaydolButton = ({ onPress, children }) => {
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
      color: 'white',
      fontSize: 25,
      fontWeight: '800',
      paddingTop: 10,
      paddingBottom: 10,
    },
    buttonStyle: {
      alignSelf: 'stretch',
      backgroundColor: '#FF5B61',
      borderRadius: 50,
      borderWidth: 0,
      borderColor: 'black',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 70,
      padding: 4,
    }
};

export default KaydolButton;
