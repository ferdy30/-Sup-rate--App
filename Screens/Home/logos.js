import React from "react";
import { StyleSheet, View, Image, TouchableOpacity,Linking } from "react-native";

export default function Logos() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={[styles.button]}
         onPress={() => Linking.openURL('https://www.facebook.com/PESuperate')}
        >
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]}
          onPress={() => Linking.openURL('https://www.instagram.com/pesuperate')}
        >
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]}   onPress={() => Linking.openURL('https://twitter.com/PESuperate')}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://seeklogo.com//images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]}   onPress={() => Linking.openURL('https://www.youtube.com/user/ProgramaSuperate')}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}   onPress={() => Linking.openURL('https://www.linkedin.com/school/programa-empresarial-%C2%A1sup%C3%A9rate/')}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}   onPress={() => Linking.openURL('https://www.flickr.com/photos/162735219@N02/')}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/flickr_logo_icon_147287.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});
