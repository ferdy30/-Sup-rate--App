import React, { useState } from 'react';
import { View, Text, Image, Modal, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;
const marginValue = 30; // Adjust this value as needed

const ImageCard = ({ imageSource, title, description,ImageCard }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ width: width * 1.0, margin: marginValue }}>

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
            <Image source={ImageCard} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.description1}>{description}</Text>
           
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    height: 172,
    justifyContent:'center',
    marginLeft: '-7.7%',
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: width * 0.9,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginTop: marginValue,
  },
  description1: {
    fontSize: 15,
    marginTop: marginValue,
    textAlign: "justify",
  },
  closeButton: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 10,
    marginTop: 4,
    width: '30%',
  },
  closeButtonText: {
    textAlign: 'center',
    color: "#00B6D8",
    fontSize: 20,
  },
});

export default ImageCard;
