import { View, Text, Image, StyleSheet, Alert, Button, Linking, FlatList } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import React, {useCallback} from 'react'

const supportedURL = 'https://superate.org.sv/contacto/';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button style={styles.paragraph} title={children} onPress={handlePress} />;
};
  

export default function NuestroPrograma() {
  return (
    <ScrollView style={styles.contenedorScroll}>
      <View style={styles.container}>
    <Text style={styles.heading}>Nuestro Programa</Text>
    <Text style={styles.paragraph}>Brinda educación de alta calidad en inglés, informática y valores a jóvenes de alto rendimiento académico durante tres años. Los jóvenes reciben tres horas diarias de clase, de forma complementaria y paralela a la educación del sistema público.</Text>
    <Text style={styles.paragraph}> Al finalizar el Programa, obtienen certificaciones internacionales que garantizan un dominio avanzado del idioma inglés y el manejo eficiente de las herramientas de Microsoft Office y programación.</Text>
    <Text style={styles.paragraph}>Los jóvenes también cuentan con una sólida base de valores y reflejan el compromiso de seguir contribuyendo al desarrollo socioeconómico del país.</Text>
    <Text style={styles.heading}>Áreas Curriculares</Text>
    <Image style={styles.img} source={require("../../assets/images/areas-curri.jpg")} />
    <Text style={styles.heading}>Requisitos de ingreso:</Text>
      <FlatList
            data={[
                {key: '• 13 o 14 años cumplidos '},
                {key: '• Cursar 8 grado del sistema público.'},
                {key: '• Alto rendimiento académico (mínimo de 8)'},
                {key: '• Recomendado por el director de su Centro Escolar.'},
                {key: '• Demostrar el deseo y potencial de superación.'},
            ]}
            renderItem={({item}) => <Text style={styles.textoList}>{item.key}</Text>}/>
      <Image style={styles.img2} source={require("../../assets/images/req-ingreso.jpg")} />
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    img: {
      width: 270,
        height: 160,
        marginTop: 36,
        resizeMode: 'cover',
      },
      img2: {
        width: 280,
          height: 170,
          marginTop: 36,
          resizeMode: 'cover',
        },
      contenedorScroll: {
        marginBottom: 36,
        backgroundColor: 'white',
    },
    container: {
      flex: 1,
      alignItems: "center",
      marginHorizontal: 38,
  },
      heading: {
        color: "#00B6D8",
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 36,
        margin:10
      },
      paragraph: {
        fontSize: 12,
        textAlign: "justify",
        lineHeight: 24,
        marginTop: 36,
      },
      textoList: {
        fontSize: 12,
        textAlign: "justify",
        lineHeight: 18,
        marginTop: 9,
    },
    link:{
      marginTop:"10%",
    },
    link2:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
})