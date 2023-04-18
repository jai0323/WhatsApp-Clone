import { View,Text,StyleSheet,Image,Pressable } from "react-native"
import dp from '../assets/dp1.png'


const StatusCard = ({navigation,name,txt}) => {
return <Pressable onPress={()=>{ navigation.navigate('message')}}> 
<View style={styles.card}>
    <View style={styles.imgborder}>
        <Image source={dp} style={styles.imgcircle}/>
        
    </View>
    
    <View style={styles.label}>
        <Text style={styles.name}>{name} </Text>   
        <Text style={styles.msg}>{txt}</Text>
    </View >
    
</View>
</Pressable>
}
export default StatusCard

const styles=StyleSheet.create({
    card:{
        paddingLeft:10,
        paddingTop:10,
        marginHorizontal:5,
        flexDirection:"row",
        backgroundColor:'white',

    },
    imgborder:{
        width:56,
        height:56,
        borderRadius:28,
        borderWidth:2,
        padding:1,
        borderColor:'rgb(0,221,111)'
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
    imgcircle:{
        height: 50,
        width: 50,
        borderRadius: 25,
    }
})
    