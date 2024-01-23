import React from 'react';
import { View, TouchableOpacity, Image, Linking, StyleSheet, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';

const ImgHome = () => {
  const images = [
    { source: require('../../../assets/imgSocios/hilasal.gif'), link: 'https://hilasal.com.sv/' },
    { source: require('../../../assets/imgSocios/adoc.gif'), link: 'https://www.empresasadoc.com/es/inicio/' },
    { source: require('../../../assets/imgSocios/albertoMotta.jpg'), link: 'https://fundacionalbertomotta.org/' },
    { source: require('../../../assets/imgSocios/fPoma.gif'), link: 'https://fundacionpoma.org/' },
    { source: require('../../../assets/imgSocios/merlet.gif'), link: 'https://www.imerlet.com/index.html' },
    { source: require('../../../assets/imgSocios/jupa.gif'), link: 'https://www.fundacionjupa.org/' },
    { source: require('../../../assets/imgSocios/fRaices.gif'), link: 'https://superate.org.sv/#' },
    { source: require('../../../assets/imgSocios/grupoQ.gif'), link: 'https://www.grupoq.com/default.html' },
    { source: require('../../../assets/imgSocios/provivienda.gif'), link: 'https://gprovivienda.com/' },
    { source: require('../../../assets/imgSocios/fSusBuenosVecinos.png'), link: 'https://www.fundacionsusbuenosvecinos.org/' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {images.slice(0, Math.ceil(images.length / 2)).map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(image.link)}
          >
            <Card containerStyle={styles.card}>
              <Image style={styles.images} source={image.source} />
            </Card>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.column}>
        {images.slice(Math.ceil(images.length / 2)).map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(image.link)}
          >
            <Card containerStyle={styles.card}>
              <Image style={styles.images} source={image.source} />
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ImgHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderColor: 'transparent',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
  },
  card: {
    padding: 2.5,
    margin: 5,
    borderColor: 'transparent',
  },
  images: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});