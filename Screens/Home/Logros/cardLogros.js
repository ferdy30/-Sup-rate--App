import React, { useState } from 'react';
import { View, Text, Image, Modal, SafeAreaView, StyleSheet, Dimensions,ScrollView,Linking, TouchableOpacity } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { WebView } from 'react-native-webview'

const width = Dimensions.get('window').width;

const ImageCard = ({ imageSource, title, description, uri }) => {
  const [modalVisible, setModalVisible] = useState(false);
  
 
  

  return (
    <View style={{ margin: width * 0.1 }}>
      <View style={styles.card} onTouchEnd={() => setModalVisible(true)}>
        <Image source={imageSource} style={styles.image} />
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
          
            
          <SafeAreaView style={{ flex: 1, width: '100%' }}>
          <WebView source={{ uri }} />
          </SafeAreaView>

          <View style={{justifyContent: 'space-between' }}>
          
          <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}
           >
          <Text style={{ textAlign: 'left', color: "#00B6D8", fontSize: 20, }}>
           Cerrar
          </Text>
          </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {Linking.openURL(uri);}}>
            <Text style={{marginLeft:'80%', marginTop:-36, textAlign: 'center',color: "#00B6D8", fontSize: 20, }}>
             Ver...
            </Text>
            </TouchableOpacity>
            </View>

          </View>
        </View>

        
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.35,
    height: 200,
    margin: -12,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '101%',
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: width * 0.92,
    height: '80%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  webviewContainer: {
    flex: 1, // Set flex to 1 for SafeAreaView
  },
  closeButton: {
    
    borderRadius: 8,
    padding: 10,
    width: '30%',
  },
});

export default ImageCard;
