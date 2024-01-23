import {View, Text, StyleSheet, ScrollView} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react'
import NuestraHistoria from "../Screens/Historia/NuestraHistoria";
import NuestroEquipo from "../Screens/Equipo/NuestroEquipo";
import NuestraFilosofia from "../Screens/Filosofia/NuestraFilosofia";



  function Screen1() {
    return (
      <View>
        <NuestraHistoria/>
      </View>
    );
  }

  function Screen2() {
    return (
      <View>
        <NuestraFilosofia/>
      </View>
    );
  }

  function Screen3() {
    return (
      <View>
        <EfectoMultiplicador/>
      </View>
    );
  }
  
  function Screen4() {
    return (
      <View >
        <NuestroEquipo/>
      </View>
    );
  }
  
  const Tab = createMaterialTopTabNavigator();
  
  export default function TabBarNavigator() {
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
          <Tab.Screen name="Historia" component={Screen1} />
          <Tab.Screen name=" Filosofia" component={Screen2} />
          <Tab.Screen name=" Equipo" component={Screen4} />
        </Tab.Navigator>
    );
  };

