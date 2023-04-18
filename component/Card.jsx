import { View,Text,StyleSheet,Image,Pressable } from "react-native"
import dp from '../assets/dp1.png'


const Card = ({navigation}) => {
return <Pressable onPress={()=>{ navigation.navigate('message')}}> 
<View style={styles.card}>
    <View style={{marginTop:10 }}>
        <Image source={dp} style={styles.imgcircle}/>
        
    </View>
    
    <View style={styles.label}>
        <Text style={styles.name}>Hannah Baker </Text>   
        <Text style={styles.msg}>Hi...</Text>
    </View >
    <View style={styles.timeArea}>
    <Text style={styles.time}> 12:30 pm</Text>
    </View>
</View>
</Pressable>
}
export default Card

const styles=StyleSheet.create({
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
    time:{
        padding:5,
        color:'grey',
        fontSize:12,
        alignSelf:"flex-end"


    },
    timeArea:{
      flex:2,
      marginTop:5,

    },
    imgcircle:{
        height: 50,
        width: 50,
        borderRadius: 25,
    }
})
    