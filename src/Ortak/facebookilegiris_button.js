import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FacebookButton = ({ onPress, children }) => {
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
      backgroundColor: '#2A71C2',
      borderRadius: 50,
      borderWidth: 0,
      borderColor: 'black',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 15,
      padding: 4,
    }
};

export default FacebookButton;
