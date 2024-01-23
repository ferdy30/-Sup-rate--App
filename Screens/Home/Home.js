import {View, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView, Image, TouchableOpacity, Linking} from 'react-native'
import AutoplayCarousel from './Carousel';
import Datos from './Datos';
import Exito from './Exito';
import Logros from './Logros/Logros';
import Video from './Video';

import ImgHome from './components/ImgHome';



const screenWidth = Dimensions.get("window").width;

export default function Home() {

    return(
        <SafeAreaView style={styles.view}>
        <ScrollView style={styles.scrollView}>
            <Text style={{marginTop:20, fontSize: 20, marginLeft:20, color: '#808285',}}>¡Supérate!</Text>
           
            
            <View style={{borderRadius:20}}>
                <AutoplayCarousel style={styles.carusel} />
            </View>
            <Text style={styles.text}>Áreas Curriculares</Text>
            

            <View style={{borderRadius:20, height: screenWidth/1.8,margin:20,width: screenWidth  }}>
                <Datos/>
            </View>
            
            <Text style={styles.text}>Videos</Text>
            <View>
            <Video/>
            </View>

            <Text style={styles.text}>Casos de Éxito</Text>
            <View>
            <Exito style={styles.carusel}/>
            </View>

            <Text style={styles.text1}>Revista Logros ¡Supérate!</Text>
            <View>
            <Logros style={styles.carusel}/>
            </View>
          
            <Text style={styles.text1}>Nuestros Socios de la Empresa Privada</Text> 
            <View>
                <ImgHome/>
            </View>
            
            <Text style={styles.text1}>Siguenos</Text> 
            <View>
                <Logo/>
            </View>

       </ScrollView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop:3,
        backgroundColor: 'white',
        
    },
    carusel: {
        borderRadius: 20,
       width: screenWidth*1
    },

    text: {
        fontSize: 20,
        marginLeft:20,
        marginTop:4,
        color: '#808285',
        textShadowColor: '#808285', // Color del borde
        textShadowOffset: { width: 1, height: 1 }, 
    },
    
    text1: {
        fontSize: 20,
        marginLeft:20,
        marginTop:8,
        color: '#808285',
        padding: 10,
        textShadowColor: '#808285', // Color del borde
        textShadowOffset: { width: 1, height: 1 }
    },
    text2: {
        fontSize: 20,
        marginLeft:20,
        marginTop:11,
        fontWeight:"bold",
        color: "#00B6D8",
        textShadowColor: '#808285', // Color del borde
        textShadowOffset: { width: 1, height: 1 }, 
        textAlign:"center",
        padding:20
    },
})