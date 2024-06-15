import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>RootLayout!!!</Text>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})