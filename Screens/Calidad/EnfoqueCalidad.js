import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const FocusScreen = () => {
    return (
        <ScrollView style={styles.contenedorScroll}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Enfoque en la calidad</Text>
                <Image style={styles.imagen} source={require("../../assets/images/enfoqueSS.png")} />
                <Text style={styles.texto}>El Programa ¡Supérate! posee un enfoque en la calidad educativa, entendida como el resultado de la articulación y mejora constante de sus elementos principales como son el compromiso empresarial, docentes y directores competentes, manuales y programas curriculares adecuados, jóvenes con deseos de superación y la evidencia externa del aprendizaje (certificaciones y evaluaciones).</Text>
            </View>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
        contenedorScroll: {
            backgroundColor: 'white',
        },
        container: {
            flex: 1,
            alignItems: "center",
            marginHorizontal: 38,
        },
        titulo: {
            color: "#00B6D8",
            fontSize: 18,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 36,
        },
        imagen: {
            width: '100%',
            height: 210,
            marginVertical: 36,
            resizeMode: 'cover',
        },
        texto: {
            fontSize: 12,
            textAlign: "justify",
            lineHeight: 24,
        },
    });

    export default FocusScreen;