import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImg }) {
  const imgSrc = selectedImg ? { uri: selectedImg } : placeholderImageSource;

  return <Image source={imgSrc} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
