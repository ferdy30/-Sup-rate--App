import { FlatList , Text , View , Image ,TouchableOpacity, StyleSheet } from "react-native"
import {Modal} from 'react-native'
import { useState } from "react"

import ImageViewer from "react-native-image-zoom-viewer"
export function InformacionAliados({navigation, route}){
 const  {aliados} =route.params
 const imagenes = aliados.imagenes.map((imagen)=>({
    url: imagen,

    
 }))
 const [visible , setVisible] = useState(true)

 return (
    <View>
      <Text>{aliados.nombre}</Text>
      <FlatList
        data={imagenes}
        
        keyExtractor={(imagen) => imagen.url}
        renderItem={({ item }) => (
        <Modal visible={visible} transparent={true} menuContext={false}>
          <> 
          <ImageViewer imageUrls={imagenes}/>

            <TouchableOpacity  style={style.closeButton} onPress={()=> setVisible(false)}>
                <Text>X</Text>
            </TouchableOpacity>
            </>
          </Modal>
        )}
      />
    </View>
  );
}

const style= StyleSheet.create({
    closeButton: {
        position: 'absolute',
        top: 600,
        alignContent:'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
})