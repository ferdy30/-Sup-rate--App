import { StyleSheet,  View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function Drawerview(props){
    return(
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>

                <Image source={require('../assets/images/logo.png')} style={styles.circleImage}/>

            </View>

            <DrawerItemList {...props}/>


        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    circleImage:{
        width: 200,
        height: 180,
        marginLeft: 32,
        marginTop:20,
        marginBottom: 20,
        resizeMode:'contain'
    },

    container: {
        justifyContent: 'center',
        height: "auto",
        marginTop:10,


    },
    drawerHead:{
        backgroundColor:'#091353',

        height:'100%',
    },
})