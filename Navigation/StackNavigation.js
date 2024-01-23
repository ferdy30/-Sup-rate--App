import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigation from "./drawernavigation";
import OnboardingScreen from "../Screens/Onboarding/OnboardingScreen.js";
import { useEffect } from "react";
import { getItem } from '../utils/asyncStorage.js';
import InformacionCentro from "../Screens/Centros/InformacionCentro";
import { InformacionAliados } from "../Screens/Aliados/InformacionAliados";

//importaciones de screens llamadas por Stack

import { useState } from "react";

const Stack = createStackNavigator()


export default function StackNavigation(){
    
    
//ASYNC APP

const [showOnboarding, setOnboarding] = useState(null);

useEffect(()=> {checkOnboarded()},[] )

 const checkOnboarded = async ()=>{
       let onboarded = await getItem('onboarded');
      if(onboarded == 1){
       //hide onboarding

       setOnboarding(false);
      }else{
       //show onboardign
       setOnboarding(true);
      }
     }  
     
    
    
     if(showOnboarding){
        return(
       
       <Stack.Navigator >
        <Stack.Screen name={"index"} component={OnboardingScreen} options={{headerShown:false}}/>
        <Stack.Screen name={"Drawer"} component={DrawerNavigation} options={{headerShown:false}}/>
        <Stack.Screen name={"InformacionCentro"} component={InformacionCentro} options={{title:""}}/>
        <Stack.Screen name={"InformacionAliados"} component={InformacionAliados} options={{title:""}}/>
        

        </Stack.Navigator>
        )

      }else {
       
        return(
            <Stack.Navigator >
                 <Stack.Screen name={"index"} component={OnboardingScreen} options={{headerShown:false}}/>
            <Stack.Screen name={"Drawer"} component={DrawerNavigation} options={{headerShown:false}}/>
            <Stack.Screen name={"InformacionCentro"} component={InformacionCentro} options={{title:""}}/>
            <Stack.Screen name={"InformacionAliados"} component={InformacionAliados} options={{title:""}}/>
            </Stack.Navigator>
            ) 

      }
    
    
    
    
}