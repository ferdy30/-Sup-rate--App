import React from 'react';
import { View, FlatList } from 'react-native';
import ImageCard from './card';

const data = [
  {
    id: '1',
    title: 'Emely Zavala',
    imageSource: require('../../assets/images/emelu.jpg'),
    description: 'Graduada del Centro ¡Supérate! ADOC en el año 2013, obtuvo gracias a su rendimiento académico y compromiso social una beca completa para sus estudios universitarios en Ciencias de la Computación y Administración de Empresas con Especialidad en Manejos de Sistemas de la Información en Berea College, Estados Unidos. Actualmente desempeña el cargo de Data Cloud Engineer at Google Public Sector. “Recuerdo que en ¡Supérate! también aprendí a crear sitios con HTML. En ese momento no me imaginaba que años más tarde estaría programando en Python y Java”',
  },
  {
    id: '2',
    title: 'Luis Castillo',
    imageSource: require('../../assets/images/Luis.jpg'),
    description: 'Graduado del Centro ¡Supérate! Hilasal en el año 2007 fue uno de los integrantes de la primera promoción del Programa. En el año 2013 Luis obtiene el empleo de Coordinador en el departamento de Booking de la empresa de logística Crowley. Actualmente es analista de sistemas de la compañía capacitando empleados nuevos de Estados Unidos, Centroamérica y El Caribe en herramientas y sistemas empresariales. “Mis maestros de ¡Supérate! no nos daban solo conocimiento técnico, también aprendimos de valores, nos ayudaban con nuestros problemas, se sentía empatía, amor y atención”.',
  },
  {
    id: '3',
    title: 'Valey González',
    imageSource: require('../../assets/images/valery.jpg'),
    description: 'Graduada del Centro ¡Supérate! Fundación JUPÁ en el año 2015, recuerda que el Programa le brindó las herramientas necesarias para afrontar con mayor confianza sus proyectos a futuro, además despertó sus deseos de apoyar a las comunidades panameñas y practicar el Giving Back. En diciembre de 2019 se gradúa con un Bachelor of Science in International Business major y un minor en Marketing de Illinois State University, Estados Unidos y de la licenciatura en Administración de Empresas con énfasis en Negocios Internacionales de Quality Leadership University de Panamá. Actualmente trabaja en Estée Lauder Companies como Retail Operations Representative.',
  },
  {
  id: '4',
    title: 'Antonio Lopéz',
    imageSource: require('../../assets/images/antonio.jpg'),
    description: 'Graduado del Centro ¡Supérate! Fundación Poma en el año 2015, afirma que, al ver el camino recorrido y los logros alcanzados, todo ha sido gracias al Programa ¡Supérate! y el apoyo incondicional de su madre.Luego de sus tres años en el Programa, Antonio logra graduarse obteniendo una beca completa para continuar con sus estudios superiores como Ingeniero en Ciencias de la Computación en la Universidad Don Bosco. Actualmente trabaja como programador en el área de informática de Autofácil, empresa de Grupo Poma.',
  },
];

const Exito = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <ImageCard title={item.title} imageSource={item.imageSource} description={item.description} />
        )}
      />
    </View>
  );
};

export default Exito;
