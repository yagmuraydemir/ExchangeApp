import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import Options from './Screens/Options';

const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}></Stack.Screen>
                <Stack.Screen name='Options' component={Options}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;