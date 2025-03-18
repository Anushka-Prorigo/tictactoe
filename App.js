import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';
import LinearGradient from 'react-native-linear-gradient';

const App = () =>{
  return(
    <LinearGradient
            colors={['#3498db', '#ffffff']}
            style={styles.container}
        >
    <View>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Game/>
    </View>
    </LinearGradient>
   );
};
const styles = StyleSheet.create({
  container :{
    flex:1,justifyContent:'center',
    alignItems:'center',
  },
  overlay:{
    flex:1,
    backgroundColor:'rgba(255,255,255,0.1)',
    justifyContent:'center',
  },
  title:{
    fontWeight:'bold',
    fontSize:40,
    textAlign:'center',
    marginTop:40,
  },
});
export default App;
