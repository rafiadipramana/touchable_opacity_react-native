import React from 'react'
import { Text, TouchableOpacity, View, Image, Alert } from 'react-native'

export default class App extends React.Component {
  render() {
    let nama = 'Rafi'

    nama = nama + ' Adi Pramana'

    let umur = 2022 - 2003
    
    umur = 'Anda saat ini berumur ' + umur + ' tahun';

    return (
      <View
        style = {{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
          width: '100%'
        }}
      >

        <Text
          style = {{
            color: 'black',
            fontSize: 28,
            fontWeight: 'bold'
          }}
        >
          {nama}
        </Text>

        <TouchableOpacity
          onPress = {() => {
            Alert.alert(
              'Pemberitahuan',
              umur
            )
          }}
          style = {{
            backgroundColor: 'dodgerblue',
            marginTop: 10,
            padding: 10,
            borderRadius: 10
          }}
        >
          <Text
            style = {{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold'
            }}
          >
            Cek Umur
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}