import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SifremiUnuttum = ({ onPress, children }) => {
  const { textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress}>
    <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
      alignSelf: 'center',
      color: '#FF5B61',
      fontSize: 20,
      fontWeight: '800',
      paddingTop: 10,
      paddingBottom: 10,
    },
};

export default SifremiUnuttum;
