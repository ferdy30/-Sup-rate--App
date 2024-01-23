import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ImpactScreen = () => {

  return (
    <ScrollView style={styles.contenedorScroll}>
        <View style={styles.contenedor}>
        <Text style={styles.titulo}>Transformación de Vidas Vía Educación</Text>
        <Text style={styles.texto}>El Programa ¡Supérate! es una iniciativa de Responsabilidad Social Empresarial que tiene alto impacto en diferentes áreas en la región, concretamente de la siguiente forma:</Text>
        <FlatList
            data={[
                {key: '• Aportando a una necesidad concreta de la región y su mercado laboral, impulsando el desarrollo integral de jóvenes y creando capital humano de calidad.'},
                {key: '• Forjando una nueva generación de jóvenes comprometidos con su superación personal y el desarrollo de Centroamérica.'},
                {key: '• Aportando una solución concreta de prevención de violencia.'},
                {key: '• Brindando nuevas y mejores oportunidades de vida a jóvenes con deseos de superación.'},
            ]}
            renderItem={({item}) => <Text style={styles.textoList}>{item.key}</Text>}
        />
        <Text style={styles.titulo}>¿Qué Hacen Nuestros Graduados?</Text>
        <Image style={styles.imagen1} source={require("../../assets/images/imagen1_ImpactSS.png")} />
        <Image style={styles.imagen2} source={require("../../assets/images/imagen2_ImpactSS.png")} borderRadius={16} />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    contenedorScroll: {
        marginBottom: 36,
        backgroundColor: 'white',
    },
    contenedor: {
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
    texto: {
        fontSize: 12,
        textAlign: "justify",
        lineHeight: 24,
        marginTop: 36,
    },
    textoList: {
        fontSize: 12,
        textAlign: "justify",
        lineHeight: 18,
        marginTop: 14,
    },
    imagen1: {
        width: 230,
        height: 123,
        marginTop: 36,
        resizeMode: 'cover',
    },
    imagen2: {
        width: '100%',
        height: 210,
        marginTop: 36,
        resizeMode: 'cover',
    },
});

export default ImpactScreen;