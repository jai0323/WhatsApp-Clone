import { View,Text,StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import StatusCard from "../component/StatusCard";


 const Status = ({navigation}) => {
    

    const contacts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,]
    return (
      <View > 
        <View style={styles.mystatus}>
            <StatusCard name={'My status'} txt={'Tap to add status update'} navigation={navigation}/>
            <Text style={styles.heading}>Recent updates</Text>
            </View> 
      <FlatList
      data={contacts}
      renderItem={({item}) =>{
        return   <StatusCard name={'Hannah Baker'} txt={'50 minutes ago'} navigation={navigation}/>
      }}
      />
      </View>
    
    )
  }
export default Status

const styles=StyleSheet.create({
    mystatus:{
        backgroundColor:"white"
    },
    heading:{
        padding:5,
        color:'grey',
        fontWeight:'600',
        marginHorizontal:15,
        marginTop:10
    }
})