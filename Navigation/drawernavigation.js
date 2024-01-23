import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screens
import Aliados from "../Screens/Aliados/Aliados";
import Home from '../Screens/Home/Home';
import QuienesSomos from "../Screens/ScreenN/QuienesSomos";
import Centros from "../Screens/Centros/Centros";
import QueHacemos from "../Screens/ScreenN/QueHacemos";
import Contacto from "../Screens/Contacto/Contacto";

//importacion de drawerNavigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerItem, DrawerContentScrollView , DrawerContent} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Drawerview from "./drawerview";
import {Image, View} from "react-native";
import drawerMenu from './drawerMenu';
import NuestroEquipo from '../Screens/Equipo/NuestroEquipo';
import NuestraHistoria from '../Screens/Historia/NuestraHistoria';
import NuestraFilosofia from '../Screens/Filosofia/NuestraFilosofia';
import NuestroPrograma from '../Screens/Programa/NuestroPrograma';
  

export default function DrawerNavigation(navigation) {
    return(
        <Drawer.Navigator initialRouteName={Home} drawerContent={props => <Drawerview {... props}/>}
                          screenOptions={{
                              headerTintColor:'black',
                              headerStyle:{
                                  backgroundColor: '#ffffff',


                              },
                              headerTitle: ({focused, color, size}) => (
                                  <View style={{flex:1, justifyContent:'flex-end', flexDirection:"row", alignItems:'center' , marginLeft:250}}>
                                  <Image source={require('../assets/images/logo.png')} style={{width: 70, height: 35  , resizeMode:'contain'}}/>
                                  </View>
                              ),
                              //color to show when the item is active
                              drawerActiveTintColor: '#7FBC03',
                              //color  for other screen that are not activated
                              drawerInactiveTintColor:'#fff',
                              drawerLabelStyle: {
                                  marginLeft: 10,
                                  fontSize: 15,

                              },
                          }}>

            <Drawer.Screen name="Inicio" component={Home}  options={{

                drawerIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ?'home-outline' :'home'  }
                        size={size}
                        color={color}
                    />
                ),

            }} />

            <Drawer.Screen name="¿Quienes Somos?" component={QuienesSomos} 
            
            options={{
               drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'reader-outline' : 'reader'}
              size={size}
              color={color}
            />
          ),
        }}>
        </Drawer.Screen>

            <Drawer.Screen name={"¿Que hacemos?"} component={QueHacemos} options={{
                drawerIcon: ({ focused , color , size }) => (
                    <Ionicons
                        name={focused ? 'school-outline': 'school'}
                        size={size}
                        color={color}
                    />
                ),
            }}/>
            

            <Drawer.Screen name="Centros" component={Centros} options={{
                drawerIcon: ({ focused , color , size }) => (
                    <Ionicons
                        name={focused ? 'ribbon-outline': 'ribbon'}
                        size={size}
                        color={color}
                    />
                ),
            }} />
            <Drawer.Screen name="Aliados" component={Aliados}  options={{
                drawerIcon: ({ focused , color , size }) => (
                    <Ionicons
                        name={focused ? 'person-add-outline': 'person-add'}
                        size={size}
                        color={color}
                    />
                ),
            }}/>
            <Drawer.Screen name="Contacto" component={Contacto} options={{
                drawerIcon: ({ focused , color , size }) => (
                    <Ionicons
                        name={focused ? 'call-outline': 'call'}
                        size={size}
                        color={color}
                    />
                ),
            }}/>

        </Drawer.Navigator>
    )

}