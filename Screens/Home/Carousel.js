import * as React from 'react';
import { Dimensions, Text, View, Image, } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function Carrousel() {
    const width = Dimensions.get('window').width;

    const images = [
        'https://live.staticflickr.com/65535/52559663966_5df25c8a2c_b.jpg',
        'https://live.staticflickr.com/65535/52560137395_a09dc60638_b.jpg',
        'https://live.staticflickr.com/65535/53196802370_9108ceace4_b.jpg',
        'https://live.staticflickr.com/65535/53152840712_9eba091c6f_b.jpg',
        'https://live.staticflickr.com/65535/52560216703_3f3597be24_b.jpg',
        'https://live.staticflickr.com/65535/52559225347_ba1dbeb775_b.jpg'
    ];

    return (
        
        <View style={{ margin: width * 0.1, borderRadius:20  }}>
            <Carousel
                loop
                width={width * 0.81}
                height={width / 2.1}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                renderItem={({ index }) => (
                   
                   <View style={{ flex: 1, justifyContent: 'center',borderRadius:20 }}>
                       
                        <Image
                            style={{ width: '100%', height: '100%', borderRadius:20  }}
                            source={{ uri: images[index] }}
                        />
                    </View>
                )}
            />
        </View>
    );
}

export default Carrousel;
