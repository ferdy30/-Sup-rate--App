import { View, StyleSheet , Button, Dimensions,ScrollView } from 'react-native';
import React, { useState } from 'react';
import  YouTubeIframe  from 'react-native-youtube-iframe';


const { width, height } = Dimensions.get('window');



export default function Videos(){
  
    const [isPlaying, setIsPlaying] = useState(false);

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (


    <View>
      
      <ScrollView horizontal={true}>

      
    <View style={styles.video}>  
      <YouTubeIframe
        videoId="Y2pcLLVdBms"
        borderRadius={50}
        height={200}
        width={320}
        
      />
      </View>    

      <View style={styles.video}>  
      <YouTubeIframe
        videoId="bb3AQAISbp0"
        height={200}
        width={320}
        style={styles.video}
      /></View>  
      
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    
  
  },
  video: {
    alignSelf: 'center',
    margin: 10,
    marginLeft:30,
    height: 180,
  },
 
});

