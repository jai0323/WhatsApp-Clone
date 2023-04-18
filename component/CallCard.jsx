import { View,Text,StyleSheet,Image,Pressable } from "react-native"
import dp from '../assets/dp1.png'
import { MaterialIcons } from '@expo/vector-icons';

const CallCard = ({navigation,name,txt,icon,img}) => {
return <Pressable onPress={()=>{ navigation.navigate('message')}}> 
<View style={styles.card}>
    <View >
        <Image source={img} style={styles.imgcircle}/>
    </View>
    
    <View style={styles.label}>
        <Text style={styles.name}>{name} </Text>   
        <Text style={styles.msg}>{txt}</Text>
    </View >
    <View style={styles.callicon}>
    <MaterialIcons name={icon} size={24} color="#1C8D73" />
    </View>
    
</View>
</Pressable>
}
export default CallCard

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
    imgcircle:{
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    callicon:{
        margin:14
    }
})
    