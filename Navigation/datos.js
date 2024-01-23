import {FlatList, View, Text, StyleSheet, Image , TouchableOpacity} from "react-native";

export default function Datos  ({navigation}){
    const centros =[{
        id:1 ,
        nombre: 'Centro ¡Supérate! Hilasal',
        estudiantes: 160 ,
        graduados: 565,
        direccion: ' Km.32 Carretera a Santa Ana, San Juan Opico, La Libertad.',
        telefono: '2319-1319',
        descripcion: 'Nuestro Centro ¡Supérate! Hilasal fue una iniciativa de la Fundación Sagrera Palomo. Se inauguró en el año 2004 gracias a la iniciativa de Responsabilidad Social Empresarial de Hilasal y al trabajo y dedicación de la Fundación Sagrera Palomo. También gracias al aporte significativo de Microsoft con las licencias de “Microsoft Office”.',
        logo: 'https://hilasal.clasessuperate.org/img/Logo.jpg',
    },
        {
            id:2 ,
            nombre: 'Centro ¡Supérate! ADOC',
            estudiantes: 139 ,
            graduados: 505,
            direccion: 'Calle Montecarmelo #800, Soyapango, San Salvador',
            telefono: '2277-0488',
            descripcion: 'Nuestro Centro ¡Supérate! ADOC se inauguró en el año 2008 gracias a la iniciativa de la Fundación ADOC y al gran aporte de Microsoft El Salvador con las licencias de “Microsoft Office”.',
            logo: 'https://hilasal.clasessuperate.org/img/Logo.jpg',
        },
        {
            id:3 ,
            nombre: 'Centro ¡Supérate! Fundación Alberto Motta - San Miguelito',
            estudiantes: 170 ,
            graduados: 433,
            direccion: ' Villa Guadalupe, Calle E San Miguelito, Panamá República de Panamá',
            telefono: ' (507) 396-3076',
            descripcion: 'Nuestro Centro ¡Supérate! Fundación Alberto Motta se abrió en el año 2010 gracias al esfuerzo y gran aporte de la Fundación Alberto Motta en la Ciudad de Panamá. Este fue el primer Centro ¡Supérate! que traspasó las fronteras salvadoreñas.',
            logo: 'https://www.superate.org.sv/wp-content/uploads/2019/10/centro-alberto-motta.jpg',
        },
        {
            id:4 ,
            nombre: 'Centro ¡Supérate! Fundación Poma',
            estudiantes: 179 ,
            graduados: 398,
            direccion: '4ta calle poniente, entre 10a y 8a avenida sur, número 5-4, Santa Tecla, La Libertad',
            telefono: ' 2229-7239',
            descripcion: 'Nuestro Centro ¡Supérate! Fundación Poma se inauguró en el año 2011 gracias a la iniciativa de la Fundación Poma y al gran aporte de Microsoft El Salvador con las licencias de “Microsoft Office”.',
            logo: 'https://www.superate.org.sv/wp-content/uploads/2019/10/centro-alberto-motta.jpg',
        },
        {
            id:5 ,
            nombre:'Centro ¡Supérate! Merlet',
            estudiantes: 98,
            graduados: 308,
            direccion: 'Calle Circunvalación, Polígono D #7, Plan de la Laguna, Antiguo Cuscatlán, La Libertad.',
            telefono: ' 2212-7500 ext 7516',
            descripcion: 'Nuestro Centro ¡Supérate! Merlet se inauguró en el año 2011 gracias a la Fundación Frech, al convenio firmado entre la Fundación Sagrera Palomo y USAID en el 2010 y la valiosa donación de licencias de Microsoft Office realizada por Microsoft El Salvador.',
            logo: 'https://www.superate.org.sv/wp-content/uploads/2019/10/centro-alberto-motta.jpg',


        },
        {
            id:6 ,
            nombre: 'Centro ¡Supérate! JUPÁ',
            estudiantes: 96 ,
            graduados: 290,
            direccion: 'Av. Ricardo J Alfaro, Edificio Plaza Edison, Piso 5, Panamá',
            telefono: ' (507) 321-1595',
            descripcion: 'Nuestro Centro ¡Supérate! Fundación JUPÁ se inauguró en el año 2013, gracias a la iniciativa de la Fundación Judío-Panameña (JUPÁ) y la Embajada de los EE. UU. en Panamá, y la donación de licencias de Microsoft Office por Microsoft Panamá.',
            logo: 'https://www.superate.org.sv/wp-content/uploads/2019/10/centro-alberto-motta.jpg',
        },
        {
            id:7 ,
            nombre:'Centro ¡Supérate! Fundación Raíces',
            estudiantes: 130,
            graduados: 245,
            direccion: 'Intersección Carretera a San Miguel y Calle a Tonacatepeque después del Paso a desnivel de Unicentro Soyapango. Estadio “Plaza España”.',
            telefono: '2292-8464 ',
            descripcion: 'Nuestro Centro ¡Supérate! Fundación Raíces inicia operaciones en el año 2013 gracias al trabajo de la Fundación Raíces, al convenio firmado entre la Fundación Sagrera Palomo y USAID en el 2010 y la valiosa donación de licencias de Microsoft Office realizada por Microsoft El Salvador.',
            logo: 'https://www.superate.org.sv/wp-content/uploads/2019/10/centro-alberto-motta.jpg',
        },
        {
            id:8 ,
            nombre:'Centro ¡Supérate! Grupo Q',
            estudiantes: 127,
            graduados: 78,
            direccion:'9ª Calle Oriente Nº 408 Barrio Concepción, San Miguel. (Ex Oficinas de AMNET)',
            telefono: '2606-0976',
            descripcion: 'Grupo Q se une a la familia ¡Supérate! en el año 2018 como patrocinador del Centro ubicado en San Miguel, El Salvador, gracias al apoyo de USAID y la valiosa donación de licencias de Microsoft Office realizada por Microsoft El Salvador.',
            logo: 'https://www.superate.org.sv/wp-content/uploads/2019/10/centro-alberto-motta.jpg',

        },
        {
            id:9 ,
            nombre:'Centro ¡Supérate! Fundación Alberto Motta - La Chorrera',
            estudiantes: 184,
            graduados:111,
            direccion: ' Ciudad del Niño, Chorrera, Panamá',
            telefono: '(507) 258-0085',
            descripcion: 'El Centro ¡Supérate! Fundación Alberto Motta - La Chorrera inicia operaciones en el año 2018 gracias al esfuerzo y trabajo de la Fundación Alberto Motta en Panamá. Este se convierte en el tercer Centro ¡Supérate! en abrir sus puertas en Panamá.',
            logo: 'https://www.superate.org.sv/wp-content/uploads/2019/10/centro-alberto-motta.jpg',


        }, {
            id: 10,
            nombre: 'Centro ¡Supérate! Fundación Provivienda',
            estudiantes: 158,
            graduados: 36,
            direccion: 'Avenida Costanera, urbanización Versalles, calle Barcelona, edificio ¡Supérate!',
            telefono: '(507) 6670-7606',
            descripcion: 'El Centro ¡Supérate! Fundación Provivienda inicia operaciones en el 2019 gracias al esfuerzo y trabajo de la Fundación Provivienda. Éste se convierte en el cuarto Centro en Panamá.',
            logo: 'https://www.superate.org.sv/wp-content/uploads/2019/10/centro-alberto-motta.jpg',

        },
        {
            id: 11,
            nombre: 'Centro ¡Supérate! Fundación Sus Buenos Vecinos',
            estudiantes: 0,
            graduados: 0,
            direccion: 'Avenida Sur, Urbanización Miramar, Casa 1A, Santiago Veraguas.',
            telefono: '6553-3253',
            descripcion: 'El Centro ¡Supérate! Fundación Sus Buenos Vecinos entrará en operaciones en el 2023 gracias al esfuerzo y trabajo de la Fundación Sus Buenos Vecinos.',
            logo: 'https://www.superate.org.sv/wp-content/uploads/2019/10/centro-alberto-motta.jpg',

        }
    ]
    return(

            <FlatList data={centros}
                      keyExtractor={(item)=> item.id}
                      renderItem={({item})=>
                      <TouchableOpacity onPress={()=>{navigation.navigate('Poma',{item:name})}} style={styles.card}>
                          <View style={styles.ImageContainer}>
                          <Image style={styles.imagen} source={{uri:item.logo}}/>
                          </View>
                          <View style={styles.textContainer}>
                          <Text style={styles.nombreCentro}>{item.nombre}</Text>
                          </View>
                      </TouchableOpacity>}
                         />



    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection:'column',
        borderRadius:10,
        backgroundColor:'#f9f9f9',
        margin:10 ,
        padding:15,
        shadowColor:'#000',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,

    },
    ImageContainer:{
        alignItems:'center',

    },
    imagen:{
        margin:15,
        width:'100%',
        height: 200,

    },
    textContainer:{
        alignItems:'center',
    },
    nombreCentro:{
        fontSize:17,
        fontWeight:'bold',
    }
})