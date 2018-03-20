import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 35
  },
  viewStyle: {
    marginTop: 20,
    backgroundColor: 'f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,


  }
};
export default Header;
