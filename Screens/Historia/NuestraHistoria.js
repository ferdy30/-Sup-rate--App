import { View, Text, Image, StyleSheet, TouchableOpacity,Dimensions,Modal } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import React, { useState } from 'react';
import HistoriaDatos from './HistoriaDatos'

const { width, height } = Dimensions.get('window');



const NuestraHistoria = () => {
  
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    
    
    <View>
      <ScrollView style={styles.contenedorScroll}>
      <View style={styles.container}>
    <Text style={styles.heading}>¿Cómo Surgió El Programa?</Text>
    <Text style={styles.paragraph}>La idea nace cuando en el año 2000 don Ricardo Sagrera Bogle y su familia crearon la Fundación Sagrera Palomo, una fundación apolítica, sin fines de lucro, enfocada exclusivamente en contribuir a la educación de El Salvador, partiendo de la premisa que la educación es el vehículo más efectivo para el desarrollo social y económico de cualquier nación.</Text>
    <Text style={styles.paragraph}>Después de varios años analizando proyectos de educación, don Ricardo junto a un equipo de sus colaboradores clave de Grupo Hilasal identificaron una oportunidad especial de servir de puente entre jóvenes de escasos recursos de las escuelas públicas del Valle de San Andrés y las oportunidades de empleo. La zona venía creciendo en inversión extranjera a través del establecimiento de parques industriales y empresas de servicio (call centers), quienes necesitaban contratar jóvenes que hablaran inglés y manejaran las herramientas de computación: competencias específicas que eran difíciles de encontrar en el entorno inmediato.</Text>
    <Text style={styles.paragraph}>Basado en esta necesidad de mercado, decidieron fundar un Centro piloto en el 2004 para impartir capacitación de alta calidad en Inglés, Computación y Valores, siempre enfocándose en atraer a los estudiantes con los mejores promedios de las escuelas públicas de la zona, que tuvieran un alto potencial y un fuerte compromiso con su superación personal. Así nace en el 2004, el Centro ¡Supérate! Hilasal para desarrollar la formación de alta calidad para jóvenes, como una iniciativa de Responsabilidad Social Empresarial: el Programa ¡Supérate!</Text>
    <Text style={styles.paragraph}>Desde sus inicios el Programa ¡Supérate! dio muestras de ser muy visionario, anticipándose a las demandas de un mundo globalizado, en donde no solo el idioma inglés y la computación constituyen herramientas importantes para la juventud, sino también los valores con los que orientan su comportamiento.</Text>
    <Text style={styles.paragraph}>La visión empresarial de origen y su formación en inglés, computación y valores han permitido que los jóvenes se inserten exitosamente en el mercado laboral y/o continúen estudios superiores; transformando así, su vida, las de sus familias y sus comunidades.</Text>
   
    <Image style={styles.img} source={require('../../assets/images/sagrera.png')} />
    <Image style={styles.img} source={{uri:'https://s3.us-west-2.amazonaws.com/v2.clubamerica.com.mx/portal/wp-content/uploads/2022/03/logo-hilasal.png'}} />

     <Text style={styles.heading}>Conoce a Sus Fundadores</Text>
     <HistoriaDatos />



      </View>
      </ScrollView>
    </View>
  )
}

export default NuestraHistoria;

const styles = StyleSheet.create({
  img: {
    width: width*0.61,
      height: 90,
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