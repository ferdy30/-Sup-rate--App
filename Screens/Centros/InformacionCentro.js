import { Image, ScrollView, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { Carousel } from "react-native-ui-lib";
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';


export default function InformacionCentro({navigation , route}) {
    const {centro, logo} = route.params

    return(
        <ScrollView>
            <View style={styles.container}>

            <Carousel  showCounter={true} autoplay={true}  loop={true} >
                    {centro.imagenes.map((imagen, index) => (
                        <Image key={index} style={{ width: 400, height: 250 }} source={{ uri: imagen }}  />))}
                </Carousel>
                <Text style={styles.nombreCentro}>{centro.nombre}</Text>
                <View style={styles.containerStudentGraduados}>
                    <View  style={styles.graduadoContainer}>
                        <Text style={styles.textGraduados}> {centro.graduados}</Text>
                    </View>
                    <Text> Graduados</Text>
                </View>

                <View style={styles.containerStudentGraduados}>
                    <View style={styles.estudianteContainer}>
                        <Text  style={styles.textGraduados}> {centro.estudiantes}</Text>
                    </View>
                    <Text> Estudiantes</Text>
                </View>

                <View style={styles.containerDos}>
                    <Image style={styles.imagen} source={logo}/>
                    <Text style={styles.descripcion}>{centro.descripcion}</Text>
                </View>
                < View>
                    <Card style={styles.card}>
                        <Card.Title   title="Información de contacto" />
                        <Card.Content>
                            <View style={styles.contactoContainer}>
                                <FontAwesome name="envelope" size={24} color="black" />
                                <Text style={styles.contactoText}>{centro.correo}</Text>
                            </View>
                            <View style={styles.contactoContainer}>
                                <FontAwesome name="phone" size={24} color="black" />
                                <Text style={styles.contactoText}>{centro.telefono}</Text>
                            </View>
                            <View style={styles.contactoContainer}>
                                <FontAwesome name="map-marker" size={24} color="black" />
                                <Text style={styles.contactoText}>{centro.direccion}</Text>
                            </View>
                            <View style={styles.redesContainer}>
                                <TouchableOpacity onPress={()=>{FacebookURL}}>
                                <FontAwesome name="facebook" size={24} color="black" />
                                </TouchableOpacity>
                                <FontAwesome name="twitter" size={24} color="black" />
                                <FontAwesome name="instagram" size={24} color="black" />
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </View>
        </ScrollView>

    )
}



const styles = StyleSheet.create({

    card: {
        margin: 16,
        padding: 15,
        backgroundColor: '#F2F2F2'
    },
    contactoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        padding:8,
    },
    contactoText: {
        fontSize: 16,
        marginLeft: 8,
    },
    redesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 24,
    },
    descripcion:{
        textAlign:'justify',
        alignItems:'center',
    },

    containerDos:{
        flex:  2,
        backgroundColor:' red',
        margin: 16,
        padding: 16,
    },
    nombreCentro:{
        color: '#00B6D8',
        fontSize: 25,
        margin: 25,
        textAlign: 'center',
    },
    estudianteContainer:{
        backgroundColor: '#8DC63F',
        padding: 15,
        margin: 'auto',
    },
    graduadoContainer:{
        backgroundColor: '#00B6D8',
        padding: 15,
        margin: 'auto',
    },
    textGraduados:{
        fontSize: 20,
        color: 'white',
    },
    containerStudentGraduados:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,

    },

    container :{
        flex: 1,
        backgroundColor: '#fff',

    },
    Text:{
        fontSize:100,
    },
    imagen:{
        width:'100%',
        height: 200,
    }
})

