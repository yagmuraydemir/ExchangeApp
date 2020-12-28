import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import {colors} from '../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 5,
  },
  containerDisabled: {
    backgroundColor:colors.offWhite,},
  button: {
    padding: 15,
    borderRightColor: colors.line,
    borderRightWidth: 1,
    backgroundColor: colors.button,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color:colors.text,
  },
});

const Input = ({ text, onButtonPress, ...props }) => {
    const containerStyles = [styles.container];
  
    if (props.editable === false) {
      containerStyles.push(styles.containerDisabled);
    }
    return (
      <View style={containerStyles}>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} {...props} />
      </View>
    );
  };


export default Input;