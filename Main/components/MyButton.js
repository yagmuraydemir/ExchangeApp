import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const MyButton = ({onPress, text}) => {
return(

    <TouchableOpacity style={styles.button}
         onPress={onPress}>
        <Image 
        source={require('../assets/reverse.png')}
        resizeMode='contain'
        style ={styles.buttonIcon}/>
        <Text 
        style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);
};


const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    buttonIcon: {
      marginRight: 10,
      width: 20,
      height: 20,
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
    },
  });


export {MyButton};