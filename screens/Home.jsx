import TopTab from "../navigation/TopTab";
import { StyleSheet,View,SafeAreaView } from "react-native";
export default function Home({navigation}){
    return (
        <SafeAreaView style={styles.tabContainer}>
         <TopTab navigation={navigation}/>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    tabContainer:{
      flex:1,
    }
  
  })