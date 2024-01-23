import {Text ,View ,StyleSheet, ScrollView , KeyboardAvoidingView} from "react-native";
import {TextField} from "react-native-ui-lib";
import {TextInput} from "react-native-paper";
import { Platform } from "react-native";
import { useRef } from "react";
import {WebView} from "react-native-webview";


export default  function Contacto(){
    const webViewRef = useRef(null);
    const injectedJs = `
    const unwantedElements = document.querySelectorAll('.header, .footer');
    unwantedElements.forEach(element => element.style.display = 'none');
  `;
    return(
        <View style={styles.container}>
      <WebView
        source={{ uri: 'https://superate.org.sv/contacto/' }}
        style={{ flex: 1 }}
        ref={webViewRef}
        onLoadEnd={() => webViewRef.current.injectJavaScript(injectedJs)}
      />
    </View>
    )
}



const styles = StyleSheet.create({
    input:{
        width:"100%",
        padding:10,
        color:'#000',
    },
    container:{
        flex:1,
        backgroundColor:"#ffff"
    },
    ContactConainer:{
        flex:1,
        flexDirection:"column",
        
       
        backgroundColor:"#ffff",
        width:"100%",
        padding:16
    },
    
    
})