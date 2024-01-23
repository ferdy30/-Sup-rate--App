import { Text, View, FlatList, StyleSheet, Image } from "react-native";

import { InformacionAliados } from "./InformacionAliados";
import { Modal } from "react-native";
import { useState } from "react";
import ImageViewer from "react-native-image-zoom-viewer";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Aliados({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  
  const aliados = [
    {
      id: 1,
      nombre: "Embajada De Los Estados Unidos",
      descripcion:
        "La Embajada de Estados Unidos en El Salvador se ha convertido en aliado del Programa, gestionando oportunidades que fortalecen el posicionamiento del Programa y que, en definitiva, representan otras posibilidades de éxito para todos los miembros de la familia ¡Supérate!; entre algunos de sus programas se encuentran: English Access Microscholarship Program y Youth Ambassadors.",
      logo: "https://impacto2030.com/wp-content/uploads/2019/08/embajada-USA-SV-flag-300x288.jpg",
      imagenes: [
        "https://superate.org.sv/wp-content/uploads/2018/12/a.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/12/b.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/12/EMBAJADA-VisitaJuezaSotoMayor.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/12/EMBAJADA-Visita-Michelle-Obama.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/12/EMBAJADA-Youth-Ambassadors-edicion-2013.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/12/IMG_2519.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/12/IMG_6231.jpg",
      ],
    },
    {
      id: 2,
      nombre: "USAID",
      descripcion:
        "La Agencia de los Estados Unidos para el Desarrollo Internacional (USAID) firmó una alianza público privada con la Fundación Sagrera Palomo y Microsoft El Salvador en 2010 para el fortalecimiento y la expansión de nuevos Centros ¡Supérate! en El Salvador. Además, USAID ha financiado Becas Semilla para que algunos de los graduados cursen estudios técnicos en Estados Unidos.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/USAID-Identity.svg/2560px-USAID-Identity.svg.png",
      imagenes: [
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0000_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0001_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/11/h6.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0002_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0003_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/11/3-2.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/05/8.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0004_Lineas.jpg",
      ],
    },
    {
      id: 3,
      nombre: "Microsoft",
      descripcion:
        "Microsoft El Salvador ha donado todas las licencias de software, sistema operativo y de productividad desde el inicio del Programa en el 2004. También apoyan con capacitaciones para docentes, computadoras para los graduados con mejores desempeños académicos y con becas DIGIGIRLZ.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1024px-Microsoft_logo_%282012%29.svg.png",
      imagenes: [
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0000_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0001_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/11/h6.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0002_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0003_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/11/3-2.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/05/8.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0004_Lineas.jpg",
      ],
    },
    {
      id: 4,
      nombre: "Hugo",
      descripcion:
        "hugo, a través de su iniciativa hugoImpact, impulsa el talento digital en el país con la entrega de becas para estudios superiores, talleres y charlas sobre programación, desarrollo de proyectos en el área de informática, capacitación docente, así como pasantías",
      logo: "https://superate.org.sv/wp-content/uploads/2022/05/hugo-Branding-06.jpg",
      imagenes: [
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0000_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0001_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/11/h6.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0002_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0003_Lineas.jpg",
        "https://superate.org.sv/wp-content/uploads/2018/11/3-2.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/05/8.jpg",
        "https://superate.org.sv/wp-content/uploads/2022/07/hilasal_0010s_0004_Lineas.jpg",
      ],
    },
    {
      id: 5,
      nombre: "Applaudo",
      descripcion:
        "Gracias al apoyo de Applaudo, los graduados del Programa ¡Supérate! tienen acceso a su programa de entrenamiento el cual consiste en una beca remunerada con una duración de tres meses en las tecnologías más demandadas a nivel mundial: Azure, Python, Ruby on Rails, iOS, Angular, Android, React, Node.js. Al completar el programa, tendrán la oportunidad de ser seleccionados para una plaza laboral en la empresa.",
      logo: "https://superate.org.sv/wp-content/uploads/2023/01/ApplaudoNavy@3x-2048x414.png",
    },
    {
      id: 6,
      nombre: "elaniin",
      descripcion:
        "elaniin apoya a estudiantes y graduados ¡Supérate! a través de visitas guiadas a sus intalaciones, charlas sobre temas relacionados a la industria digital y acceso a oportunidades laborales y pasantías.",
      logo: "https://superate.org.sv/wp-content/uploads/2023/01/Copia-de-Copia-de-Elaniin-Logo-768x312.png",
    },
  ];

  return (
    <FlatList
      data={aliados}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <View style={styles.card}>
            <View style={styles.ImageContainer}>
              <Image style={styles.imagen} source={{ uri: item.logo }} />
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <Text style={styles.text}>{item.descripcion}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setVisible(true);
              if (item.imagenes) {
                setCurrentImages(item.imagenes.map((image) => ({ url: image })));
              } else {
                setCurrentImages([]);
              }
            }}
            
          >
            
          </TouchableOpacity>

         
          <Modal visible={visible} transparent={true}>
            
            <ImageViewer style={styles.containerModal}
              imageUrls={currentImages}
            />
             <TouchableOpacity style={ {backgroundColor: '#BCBEC0',color: 'white', borderRadius: 10,padding: 10,marginTop: -40, width: '30%'}}  onPress={() => setModalVisible(false)}  >
            <Text style={{ textAlign: 'center',fontSize: 15,}}>Cerrar</Text>
          </TouchableOpacity>
            
          </Modal>
          
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
    containerModal:{
    display: "flex",
    flex: 1
    },

    closeButton: {
    backgroundColor: "Red",
    padding: 10,
    borderRadius: 20,
    elevation: 5,
  },
  card: {
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    margin: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  closeButton: {
    position: "absolute",
    top: 600,
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageContainer: {
    alignItems: "center",
  },
  imagen: {
    width: "100%",
    height: 140,
    resizeMode:'contain'
  },
  text: {
    fontSize: 15,
    color: "#000",
    textAlign: "justify",
  },

  textButon: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#8DC63F",
    margin: 10,
    width: 100,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
  },
});
