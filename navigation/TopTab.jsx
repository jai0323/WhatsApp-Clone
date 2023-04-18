import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../screens/Chat';
import Calls from '../screens/Calls';
import Status from '../screens/Status';

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator screenOptions={{
  
      tabBarStyle: { backgroundColor: '#1C8D73' },
      marginTop:0,
      tabBarActiveTintColor: '#fff',

    }}>
       <Tab.Screen name="Chat" component={Chat} />
       <Tab.Screen name="Status" component={Status} />
       <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}