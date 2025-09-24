import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Index from './src/Index';


export default function App() {
  return (
    <ImageBackground source={require("./assets/bg.jpg")}
    style={styles.container}
    imageStyle={{opacity: 0.50}}
    >
      <Index />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222121ff',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: "cover",  
  },
});