import { View,Text, FlatList,StyleSheet, Pressable } from "react-native";
import CallCard from "../component/CallCard";
import dp from '../assets/dp1.png'
import { AntDesign } from '@expo/vector-icons';


export default function Calls ({navigation}) {
   
    const contacts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,]
    return (
      <View > 
        <View style={styles.mystatus}>
        <Pressable onPress={()=>{ navigation.navigate('message')}}> 
        <View style={styles.card}>
         <View style={styles.linkcircle}>
         <AntDesign name="link" size={24} color="white" />
        </View>
    
    <View style={styles.label}>
        <Text style={styles.name}>Create call link </Text>   
        <Text style={styles.msg}>Share a link for your WhatsApp call</Text>
    </View >
    
    
</View>
</Pressable>
            <Text style={styles.heading}>Recent</Text>
            </View> 
      <FlatList
      data={contacts}
      renderItem={({item}) =>{
        return   <CallCard name={'Jessica Baker'} txt={'50 minutes ago'} img={dp} icon={'call'} navigation={navigation}/>
      }}
      />
      </View>
    
    )
  }

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
    },
    card:{
        paddingLeft:10,
        paddingTop:10,
        marginHorizontal:5,
        flexDirection:"row",
        backgroundColor:'white',

    },
    
    label:{
    flex:6,
    marginVertical:0.5,
    paddingLeft:15,
    paddingTop:10,
   },
    name:{
    fontSize:18,
    fontWeight:"400"
    
    },
    msg:{
        padding:2,
        color:'grey'
    },
    linkcircle:{
        height: 50,
        width: 50,
        borderRadius: 25,
        marginTop:5,
        padding:13,
        backgroundColor:'#1C8D73'
    },
    callicon:{
        margin:14
    }

})