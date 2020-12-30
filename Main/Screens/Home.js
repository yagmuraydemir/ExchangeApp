import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, View, Image,Dimensions, Alert, StatusBar, Text, TouchableOpacity } from 'react-native';
import {colors} from '../assets/colors';
import Input from '../components/Input';
import {format} from 'date-fns';
import {MyButton} from '../components/MyButton';



 function App({navigation}){ 
   
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = 0.89824;
  const date = new Date();



   return(
   <SafeAreaView  style={styles.container}>
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
       <StatusBar barStyle='light-content' backgroundColor={colors.button}/>
       
     <View style={styles.logoContainer}>
      <Image style={styles.img} source={require('../assets/logo.png')}/>
      </View> 
      <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.push('Options')}>
        <Image style={{ alignItems: 'flex-end', width:35, height:35, flexDirection: 'row-reverse'}} source={require('../assets/export.png')} />
      </TouchableOpacity>
      </SafeAreaView>
      <Text style={styles.textHeader}>Currency Converter</Text>
      <View>
      
       <Input
               text="USD"
               value=""
               onButtonPress={() => navigation.push('Options')}
               keyboardType="numeric"
               onChangeText={(text) => console.log('text', text)}
       ></Input>
     </View>
     <View>
       <Input
               text="GBP"
               value=""
               onButtonPress={() => navigation.push('Options')}
               keyboardType="numeric"
               onChangeText={(text) => console.log('text', text)}
               editable={false}
       ></Input>
       <Text style={styles.text}>1 {baseCurrency} = {conversionRate} {quoteCurrency} as of {format(date, 'Pp')}.</Text>
       <MyButton text="Reverse Currencies" onPress={() => Alert.alert('got this bitchez')} />
     </View>
     </KeyboardAvoidingView>
   </SafeAreaView>
   );

 }

const screenSize= Dimensions.get('window');
const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:colors.line,justifyContent:'center'},
    img:{position:'absolute', width:screenSize.width*0.25, height:screenSize.height*0.25},
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,},
        textHeader: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 20,
            marginTop:20
            
          },
          text: {
            fontSize: 14,
            color: 'white',
            textAlign: 'center',
          },
        
 })



export default App;




 
  
 

