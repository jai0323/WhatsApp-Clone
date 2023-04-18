import {View,Text,FlatList} from "react-native"
import Card from "../component/Card"


const Chat = ({navigation}) => {
    const contacts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,]
    return (
      <View >  
      <FlatList
      data={contacts}
      renderItem={({item}) =>{
        return   <Card navigation={navigation}/>
      }}
      />
      </View>
    
    )
  }
export default Chat