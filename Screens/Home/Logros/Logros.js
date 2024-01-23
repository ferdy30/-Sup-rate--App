import React from 'react';
import { View, FlatList } from 'react-native';
import ImageCard from './cardLogros';

const data = [
  {
    id: '1',
    title: 'Diciembre 2022',
    imageSource: require('../../../assets/images/log1.png'),
    uri:'https://superate.org.sv/magazines/diciembre-2022/',
  },
  {
    id: '2',
    title: 'Diciembre 2021',
    imageSource: require('../../../assets/images/log2.png'),
    description: 'Graduado del Centro ¡Supérate! Hilasal en el año 2007 fue uno de los integrantes de la primera promoción del Programa. En el año 2013 Luis obtiene el empleo de Coordinador en el departamento de Booking de la empresa de logística Crowley. Actualmente es analista de sistemas de la compañía capacitando empleados nuevos de Estados Unidos, Centroamérica y El Caribe en herramientas y sistemas empresariales. “Mis maestros de ¡Supérate! no nos daban solo conocimiento técnico, también aprendimos de valores, nos ayudaban con nuestros problemas, se sentía empatía, amor y atención”.',
    uri:'https://superate.org.sv/magazines/diciembre-2021/',
  },
  {
    id: '3',
    title: 'Diciembre 2020',
    imageSource: require('../../../assets/images/log3.png'),
    description: 'Graduada del Centro ¡Supérate! Fundación JUPÁ en el año 2015, recuerda que el Programa le brindó las herramientas necesarias para afrontar con mayor confianza sus proyectos a futuro, además despertó sus deseos de apoyar a las comunidades panameñas y practicar el Giving Back. En diciembre de 2019 se gradúa con un Bachelor of Science in International Business major y un minor en Marketing de Illinois State University, Estados Unidos y de la licenciatura en Administración de Empresas con énfasis en Negocios Internacionales de Quality Leadership University de Panamá. Actualmente trabaja en Estée Lauder Companies como Retail Operations Representative.',
    uri:'https://superate.org.sv/magazines/revista-logros-superate-2020/',
  },
  {
  id: '4',
    title: 'Diciembre 2019',
    imageSource: require('../../../assets/images/revista2019.png'),
    description: 'Graduado del Centro ¡Supérate! Fundación Poma en el año 2015, afirma que, al ver el camino recorrido y los logros alcanzados, todo ha sido gracias al Programa ¡Supérate! y el apoyo incondicional de su madre.Luego de sus tres años en el Programa, Antonio logra graduarse obteniendo una beca completa para continuar con sus estudios superiores como Ingeniero en Ciencias de la Computación en la Universidad Don Bosco. Actualmente trabaja como programador en el área de informática de Autofácil, empresa de Grupo Poma.',
    uri:'https://superate.org.sv/magazines/diciembre-2019/',
  },
  {
  id: '5',
    title: 'Diciembre 2018',
    imageSource: require('../../../assets/images/revista2018.png'),
    description: 'Graduado del Centro ¡Supérate! Fundación Poma en el año 2015, afirma que, al ver el camino recorrido y los logros alcanzados, todo ha sido gracias al Programa ¡Supérate! y el apoyo incondicional de su madre.Luego de sus tres años en el Programa, Antonio logra graduarse obteniendo una beca completa para continuar con sus estudios superiores como Ingeniero en Ciencias de la Computación en la Universidad Don Bosco. Actualmente trabaja como programador en el área de informática de Autofácil, empresa de Grupo Poma.',
    uri:'https://superate.org.sv/magazines/diciembre-2018/',
  },
];

const logros = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <ImageCard title={item.title} imageSource={item.imageSource} description={item.description} uri= {item.uri} />
        )}
      />
    </View>
  );
};

export default logros;
