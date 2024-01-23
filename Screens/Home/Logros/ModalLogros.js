import React from 'react';
import { View, Button, Modal, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

class TestClass extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      showModal : false
    }
  }

  ActivityIndicatorLoadingView () {
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style= {styles.ActivityIndicatorStyle}
      />
    );
  }

  render () {
    return (
      <View style= { {flex : 1, justifyContent : 'center', alignItems: 'center'}}>
        <Button title="Press" onPress= { () => this.setState ( {showModal : !this.state.showModal})}/>
        <Modal visible= {this.state.showModal}>
          <View style= {styles.modal}>
            <View style= {styles.modalContainer}>
              <WebView style= { { flex : 1 }} source= { {uri: '[4](https://github.com/facebook/react-native)'}}/>
              renderLoading= {this.ActivityIndicatorLoadingView}
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create ( {
  modal : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor: 'rgba (0,0,0,0.5)'
  },
  modalContainer : {
    backgroundColor : 'white',
    width : '90%',
    height : '90%',
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default TestClass