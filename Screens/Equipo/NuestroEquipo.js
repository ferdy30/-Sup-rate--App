import { View, Text, StyleSheet, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';

const list = [
  {
    name: 'Ricardo Sagrera Bogle',
    avatar_url: 'https://superate.org.sv/wp-content/uploads/2022/05/rsb.jpg',
    subtitle: 'Presidente y Fundador del Programa ¡Supérate! y Director Propietario por Centro ¡Supérate! Hilasal'
  },
  {
    name: 'Arturo Sagrera Palomo',
    avatar_url: 'https://superate.org.sv/wp-content/uploads/2022/05/asp.jpg',
    subtitle: 'Director General Programa ¡Supérate!'
  },
  {
    name: 'Jaime R. Palomo',
    subtitle: 'Director Propietario por Centro ¡Supérate! ADOC',
    avatar_url: 'https://superate.org.sv/wp-content/uploads/2022/05/jaime_palomo.jpg',
},
{
    name: 'María Elena Fábrega',
    subtitle: 'Directora Propietaria por Centro ¡Supérate! Fundación Alberto Motta',
    avatar_url: 'https://superate.org.sv/wp-content/uploads/2022/05/mary_fabrega.jpg',
},
{
    name: 'Michelle De Poma',
    subtitle: 'Directora Propietaria por Centro ¡Supérate! Fundación Poma',
    avatar_url: 'https://superate.org.sv/wp-content/uploads/2022/05/michelle_de_poma.jpg',
},
{
    name: 'Mary Alice De Frech',
    subtitle: 'Directora Propietaria por Centro ¡Supérate! Merlet',
    avatar_url: 'https://superate.org.sv/wp-content/uploads/2022/05/mary_alice_siman_de_frech.jpg',
},
{
    name: 'Marci Mizrachi',
    subtitle: 'Directora Propietaria por Centro ¡Supérate! Fundación JUPÁ',
    avatar_url: 'https://superate.org.sv/wp-content/uploads/2022/05/marci_mizrachi.jpg',
},
{
    name: 'Juan F. Salaverría',
    subtitle: 'Director Propietario por Centro ¡Supérate! Grupo Q',
    avatar_url: 'https://superate.org.sv/wp-content/uploads/2022/05/juan_f_salaverria.jpg',
},
{
    name: 'María Cristina Salazar',
    subtitle: 'Directora Propietaria por Centro ¡Supérate! Fundación Provivienda',
    avatar_url: 'https://superate.org.sv/wp-content/uploads/2022/05/mcs.jpg',
}];

const equipo=[
  {
  id:10 ,
  nombre: 'Rodrigo Bustamante',
  descripcion: 'Director Ejecutivo Programa ¡Supérate!',
  image: 'https://superate.org.sv/wp-content/uploads/2021/10/our_team_RB.png',
},
{
  id:11 ,
  nombre: 'Irene Flores',
  descripcion: 'Directora Académica Programa ¡Supérate!',
  image: 'https://superate.org.sv/wp-content/uploads/2022/05/irene_flores.jpg',
},
{
  id:12 ,
  nombre: 'Leyla De Guzmán',
  descripcion: 'Directora de Operaciones Programa ¡Supérate!',
  image: 'https://superate.org.sv/wp-content/uploads/2022/05/leyla_guzman.jpg',
},
{
  id:13 ,
  nombre: 'Saraí Aguilar',
  descripcion: 'Administradora Contable Programa ¡Supérate!',
  image: 'https://superate.org.sv/wp-content/uploads/2022/05/sarai_aguilar.jpg',
},{
  id:14 ,
  nombre: 'Rodrigo Castro',
  descripcion: 'Coordinador de Proyectos y Comunicaciones Programa ¡Supérate!',
  image: 'https://superate.org.sv/wp-content/uploads/2022/05/rodrigo_castro.jpg',
}];

const renderItem = ({ item }) => {
  return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.descripcion}>{item.descripcion}</Text>
      </View>
  );
};

const NuestroEquipo = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.heading}>Junta Directiva</Text>
      <Text style={styles.paragraph}>Está compuesta por el presidente y representantes de los concesionarios del Programa ¡Supérate!.</Text>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar style={styles.photo} source={{uri: l.avatar_url}}/>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.description}>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
   <Text style={styles.heading}>Equipo Institucional</Text>
      <Text style={styles.paragraph}>Está compuesto por el Director Ejecutivo, Directora Académica, Directora de Operaciones, Administradora Contable y Coordinador de Proyectos y Comunicaciones.</Text>
      <FlatList 
      data={equipo} 
      renderItem={renderItem} 
      keyExtractor={(item) => item.id.toString()} 
      numColumns={2}
          style={{
            marginLeft: 10,
            marginRight: 10,
      }}/>
    </View>
    </ScrollView>
  );
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      color:"white",
      paddingStart:10
  },
  title: {
      fontSize: 20,
      paddingLeft:7,
      color: '#000',
      fontWeight:"bold"
  },
  description: {
      fontSize: 15,
      padding:5,
      fontStyle: 'normal',
  },
  photo: {
    shadowOffset: {
      width: 16,
      height: 16,
    },
    shadowColor: "#fff",
    shadowRadius: 30,
    width: "25%",
    height: height * 0.1,
    borderRadius: 100,
    overflow : 'hidden',
    marginVertical : 10
  },
  heading: {
    color: "#00B6D8",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    margin:5
  },
  paragraph: {
    fontSize: 13,
    textAlign: "justify",
    lineHeight: 24,
    marginTop: 20,
    margin:20
},
card:{
  backgroundColor: "#fff",
  padding: 12,
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 20 },
  shadowOpacity: 0.05,
  shadowRadius: 5,
  marginTop: 15,
  width: '45%',
  margin: '2.5%',
},
image: {
  width: 120,
  height: 120,
  borderRadius: 25,
},
nombre: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign:"center",
  marginLeft: 0,
  padding:5
},
descripcion: {
  fontSize: 14,
  padding: 0,
  textAlign:"center"

},
});

export default NuestroEquipo;