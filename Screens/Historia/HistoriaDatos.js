import React from 'react';
import { View, FlatList } from 'react-native';
import ImageCard from './Fundadores';

const data = [
  {
    id: '1',
    title: 'RICARDO SAGRERA BOGLE',
    imageSource: require('../../assets/images/rb.png'),
    img: require('../../assets/images/sup9.jpg'),
    description: 'Ricardo Sagrera Bogle es el Presidente de Grupo Hilasal, una empresa familiar establecido en El Salvador en 1942. En el año 2000, Ricardo y su esposa María Eugenia, crearon la Fundación Sagrera Palomo (FSP) como el vehículo de inversión social de la familia, la cual está enfocado principalmente en Educación. En el año 2004, Ricardo fundó el Programa Empresarial ¡Supérate!, un Programa de tres años de capacitación en Inglés, Informática y Valores dirigido a jóvenes de escasos recursos con alto deseo de superación bajo la misión de “Transformar vidas vía Educación”',
  },
  {
    id: '2',
    title: 'ARTURO SAGRERA PALOMO',
    imageSource: require('../../assets/images/as.png'),
    img: require('../../assets/images/digital2.jpg'),
    description: 'Arturo es Presidente de Empresas ADOC y Director de Grupo Hilasal. En paralelo a su vida profesional, le dedica una buena parte de su tiempo a múltiples proyectos de inversión social en El Salvador. Es Director General del Programa ¡Supérate!, una franquicia social enfocada a elevar el nivel educativo de la juventud de Centroamérica. En el 2009 fundó Proyecto País, un proyecto comunitario enfocado en construir ambientes de sana convivencia en el contexto de la prevención primaria de la violencia social. Arturo adicionalmente es Director de la Fundación Sagrera Palomo y miembro de la Junta Directiva de FUSAL. Es miembro de YPO El Salvador y Fellow del Central American Leadership Initiative (CALI) y el Aspen Global Leadership Network.',
  },
 
];

const HorizontalImageGallery = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        vertical
        renderItem={({ item }) => (
          <ImageCard title={item.title} imageSource={item.imageSource} description={item.description} ImageCard={item.img}/>
        )}
      />
    </View>
  );
};

export default HorizontalImageGallery;
