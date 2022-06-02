import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, Dimensions,ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Jogos Legais</Text>
      <StatusBar style="auto" />
      <Text style={estilo.jogo}>HellBlade - 2017</Text>
      <Image style={estilo.img} source={require("./assets/hellblade.jpg")}/>
      <Text style={estilo.jogo}>Red Dead Redemption 2 - 2018</Text>
      <Image style={estilo.img} source={require("./assets/reddead2.jpg")}/>
      <Text style={estilo.jogo}>Red Dead Redemption - 2010</Text>
      <Image style={estilo.img} source={require("./assets/redead1.jpg")}/>
      <Text style={estilo.jogo}>HALO Infinite - 2021</Text>
      <Image style={estilo.img} source={require("./assets/halo.jpg")}/>
      <Text style={estilo.jogo}>Crash Bandicoot - 1996</Text>
      <Image style={estilo.img} source={require("./assets/crash.jpg")}/>
      <Text style={estilo.jogo}>THE PUNISHER - 2004</Text>
      <Image style={estilo.img} source={require("./assets/just.jpg")}/>
      
    
    </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C2D32',
    alignItems: 'center',
    
  },
  titulo:{
    fontSize:38,
    marginTop:25,
    marginBottom:50,
    color:'#FF8D0A',
  },

img:{
width:350,
height:300,
marginBottom:40,
borderRadius:10,
},

jogo:{
  fontSize:22,
color:'#FF8D0A',
}

});
