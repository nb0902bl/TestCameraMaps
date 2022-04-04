import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet

} from 'react-native'
import React from 'react'
import {
    AntDesign,
    FontAwesome5
} from 'react-native-vector-icons'


const HomeScreen = ({navigation}) => {
    
    {/* Стили */}
    const {
        camera,
        strella,

    } = styles

    {/* Функция Навигации */}
    const _AccessCameraScreen = () =>{
        navigation.navigate('Camera')
    }
    const _TestForMaps = () =>{
        navigation.navigate('MapsTest')
    }
  return (
    <View style={camera}>
        <TouchableOpacity onPress={_AccessCameraScreen}>
            <AntDesign 
            name='camera' 
            size={40}
            style={strella}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={_TestForMaps}>
            <FontAwesome5 
            name='map-marker-alt' 
            size={40}
            style={strella}
            />
        </TouchableOpacity>
        
    </View>
  )
}
const styles = StyleSheet.create({
    camera:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
   strella:{
       color:'gray'
   }
    
})
export default HomeScreen