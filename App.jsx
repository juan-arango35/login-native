import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles= StyleSheet.create({
  container: {

    backgroundColor: "blue",
    color: "white",
    padding: 15

  }
})

export default function App() {
  return (

    
    <View style={styles.container} > 
      <Text style={styles.container}  >
      HOLA ESTAMOS TRABAJANDO PARA MEJORAR, agregando a git hub,
      hemos modificado para hacer un commit en la rama 

      </Text>
    </View>
  )
}