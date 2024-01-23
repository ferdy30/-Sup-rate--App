import React, { useState }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Modal,Image, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const width = Dimensions.get('window').width;

export default function App() {
  
  const [modalVisible, setModalVisible] = useState(false);
  return (
  
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button]}>
          <LottieView
          source={require('../../assets/animations/lottie2.json')} 
          autoPlay
          loop
          marginTop={'-10%'}
        />
          <Text style={styles.buttonText1}>+1.5k Graduados</Text>
        </TouchableOpacity>
       
       
        <View style={styles.verticalButtons}>
          <TouchableOpacity style={[styles.button2]} onTouchEnd={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Unetenos</Text>
        
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.button3]}>
            <Text style={styles.buttonText}>Excelencia</Text>
          </TouchableOpacity>
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            
            <Text style={styles.buttonText}>Unetenos</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ textAlign: 'center', fontSize: 15 }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      </View>

  );
}

const styles = StyleSheet.create({
  
 
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  verticalButtons: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'column',
    width: '40%',
    justifyContent: 'space-between',
  },

  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    height:'100%',
    width: '40%',
    backgroundColor: '#00B6DE',
  },
  button2:{
    backgroundColor: '#045796',
    width: '80%', 
    height: '49%', 
    borderRadius: 10,  
    paddingVertical: 8, 
    textAlign: 'center', 
    paddingVertical: 15
  },
  button3:{
    backgroundColor: '#8DC63F',
    width: '80%', 
    height: '49%', 
    borderRadius: 10,  
    paddingVertical: 8, 
    textAlign: 'center', 
    paddingVertical: 15
    
  },
  buttonText1: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginTop: '90%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: '15%',
  
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.9,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#BCBEC0',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: '30%',
  },


});
