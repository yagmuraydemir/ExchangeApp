import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import {  } from 'react-native-gesture-handler';
import currenciesList from '../data/currenciesList.json';


function Currensies ({ navigation }) {
  
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor='white' />
        <FlatList
          data={currenciesList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                title={item}
                onPress={() => {
                  navigation.pop();
                }}
                keyExtractor={item}
              />
            );
          }}
    
        />
      </View>
    );
  };

  export default Currensies;