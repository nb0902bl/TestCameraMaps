import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'



const AccessMap = () => {
  const [pin,SetPin] = useState({
    latitude:49.8402, 
    longitude:35.6175,
  })
    
  return (
    <>

    <MapView style={{flex:1}} provider={PROVIDER_GOOGLE}>
        <Marker
          coordinate={pin}
          pinColor='red'
          draggable={true}
          onDragStart={e=>{
            console.log('drag start' , e.nativeEvent.coordinates)
          }}
          onDragEnd={e=>{
            SetPin({
              latitude:e.nativeEvent.coordinate.latitude,
              longitude:e.nativeEvent.coordinate.longitude
            })
          }}
        />

        
        <Circle center={pin} radius={500}/>
      </MapView>


         </>
    )
}

export default AccessMap