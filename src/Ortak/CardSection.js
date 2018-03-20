import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
  return (
    <View style={styles.subContainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  subContainerStyle: {
    borderBottomWidth: 1,
    //padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    borderRadius: 30,
  },
};
export default CardSection;
