import {View, Text, StyleSheet} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react'
import NuestroPrograma from "../Screens/Programa/NuestroPrograma";
import ImpactScreen from "../Screens/Impacto/ImpactScreen";
import EnfoqueCalidad from "../Screens/Calidad/EnfoqueCalidad";



  function Screen1() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontStyle: 'bold' }}>
        <NuestroPrograma/>
      </View>
    );
  }

  function Screen2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <EnfoqueCalidad />
      </View>
    );
  }
  

  function Screen3() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImpactScreen />
      </View>
    );
  }

  
  const Tab = createMaterialTopTabNavigator();
  
  export default function TabBarNavigator2() {
    return (
      <Tab.Navigator 
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize", 
          fontWeight:"bold",
          alignItems:"center",
        }, 
        tabBarIndicatorStyle:{
          height: 7,
          borderRadius:5,
          backgroundColor:"#00B6D8"
        }}}>
          <Tab.Screen name="Nuestro Programa" component={Screen1} />
          <Tab.Screen name="Enfoque en la Calidad" component={Screen2} />
          <Tab.Screen name="Impacto" component={Screen3} />
        </Tab.Navigator>
    );
  }
