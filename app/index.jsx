import { Text, View , StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
//index file is the homepage
function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.indexText} >Index</Text>
      <StatusBar style="auto"/>
      <Link href="/home" style={{color:'blue'}}>Go to Home!</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
  },
  indexText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
  }
})
export default App