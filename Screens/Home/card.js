import React, { useState } from 'react';
import { View, Text, Image, Modal, Button, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;

const ImageCard = ({ imageSource, title, description }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ margin: width * 0.1 }}>
      <View style={styles.card} onTouchEnd={() => setModalVisible(true)}>

     
        <Image source={imageSource} style={styles.image} />
           <View style= {{marginTop:-10,}}> 
        <Text style={styles.title}>{title}</Text></View>
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
      <Image source={imageSource} style={styles.modalImage} />
      <Text style={styles.modalTitle}>{title}</Text>
      <Text style={styles.description1}>{description}</Text>
       
         <TouchableOpacity style={ {backgroundColor: '#BCBEC0',color: 'white', borderRadius: 10,padding: 10,marginTop: 20, width: '30%'}}  onPress={() => setModalVisible(false)}  >
            <Text style={{ textAlign: 'center',fontSize: 15,}}>Cerrar</Text>
          </TouchableOpacity>
    </View>
  </View>
</Modal>



    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.79,
    height: 190,
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
    height: '100%',
    borderRadius: 10,
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
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    color: '#808285',
  },
  description1:{
    fontSize: 15,
    marginTop: 10,
    textAlign: "justify",
  },
  
  
});

export default ImageCard;
