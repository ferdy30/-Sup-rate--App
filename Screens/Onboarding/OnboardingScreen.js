import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/images/tech3.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/images/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../assets/images/tech3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

const CustomSkipButton = () => {
  const navigation = useNavigation();

  const _onSkip = () => {
    navigation.navigate('Drawer');
  };
  return (
    <Text style={styles.skipButton} onPress={_onSkip}>
      Skip
    </Text>
  );
};

const Onboarding = () => {
  const navigation = useNavigation();
  const [showRealApp, setShowRealApp] = useState(false);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  const _onDone = () => {
    setShowRealApp(true);
    navigation.navigate('Drawer');
  };

  if (showRealApp) {
   
    return null; 
  } else {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        renderSkipButton={() => <CustomSkipButton />}
        onDone={_onDone}
      />
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 1.0,
    height: height * 1.1,
  },
  skipButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Onboarding;



/*
import { View,ImageBackground, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import LottieView from "lottie-react-native";
import { setItem } from '../utils/asyncStorage';


const { width, height } = Dimensions.get('window');

//COLORES
var Celeste = '#00B6DE';
var Verde =   '#8DC63F';
var Azul = '#045796';
var GrisC = '#BCBEC0';
var GrisO = '#808285';


const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./../assets/images/img23.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./../assets/images/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./../assets/images/3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

const CustomSkipButton = () => {
  const navigation = useNavigation();

  const _onSkip = () => {
    navigation.navigate('Drawer');
  };
  return (
    <Text style={styles.skipButton} onPress={_onSkip}>
      Skip
    </Text>
  );
};

const Onboarding = () => {
  const navigation = useNavigation();
  const [showRealApp, setShowRealApp] = useState(false);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };
  
  

  const _onDone = () => {
    setShowRealApp(true);
    navigation.navigate('Drawer');
  };

  if (showRealApp) {
    return <StackNavigation />;
  } else {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        renderSkipButton={() => <CustomSkipButton />}
        onDone={_onDone}
      />
    );
  }
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: -40,
    
  },
  imagenes: {
    width: width * 0.9, 
    height: height * 0.40,
    borderRadius: 20,
    paddingTop: 100,
  },
});
*/