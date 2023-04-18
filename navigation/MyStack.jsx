
import { createStackNavigator } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';
import Home from '../screens/Home';
import Message from '../screens/Message';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{title:"WhatsApp",
    headerStyle:{backgroundColor:'#1C8D73'},
    headerTintColor:'white',
    headerMode:'screen',
    
    }}>
       <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="message" component={Message}/>
    </Stack.Navigator>
  );
}