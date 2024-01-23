import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const commonMargin = 30; 
const NuestraFilosofia = () => {
  
  

  return (
    <View>
      <ScrollView style={styles.contenedorScroll}>
        <View style={styles.container}>
          <Text style={styles.heading}>Transformando vidas vía educación</Text>

          <Text style={styles.subheading}>Nuestra Visión</Text>

          <Text style={styles.paragraph}>
            Ser un programa de excelencia académica que contribuya a elevar el nivel educativo de la juventud de Centroamérica, con el fin de brindarles nuevas y mejores oportunidades de vida a través de la capacitación de alta calidad en inglés, informática y valores.
          </Text>

          <Text style={styles.subheading}>Nuestra Misión</Text>

          <Text style={styles.paragraph}>
            Desarrollar jóvenes con potencial y deseo de superación personal, para que a través de una formación integral puedan optar a mejores oportunidades de formación profesional y de trabajo, para mejorar su calidad de vida y su entorno.
          </Text>

          <Text style={styles.subheading}>   Nuestros Valores</Text>

          <Image style={styles.img} source={require('../../assets/images/vm6.png')} />
          <Image style={styles.img2} source={{ uri: 'https://superate.org.sv/wp-content/uploads/2022/12/filosofia3.jpg' }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default NuestraFilosofia;

const styles = StyleSheet.create({
  img: {
    width: width * 0.9,
    height: 400,
    marginTop: commonMargin,
    resizeMode: 'stretch',
  },
  img2: {
    width: 200,
    height: 190,
    marginTop: commonMargin,
    borderRadius: 1000,
    resizeMode: 'contain',
  },
  contenedorScroll: {
    marginBottom: commonMargin,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: commonMargin,
  },
  heading: {
    color: '#00B6D8',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: commonMargin,
    margin: commonMargin,
  },
  subheading: {
    color: "#00B6D8",
    fontSize: 22,
                   fontWeight: "bold",
                   marginTop: 36,
                   textAlign: 'right',
                   marginLeft:'-55%'
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'justify',
    lineHeight: 24,
    marginTop: commonMargin,
  },
});
