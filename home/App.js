import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts as useAntonFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';



//#87E1AB - VERDE 
//#51B2D1 - AZUL CLARINHO
//#263149 - AZUL ESCURO

//NOVA COR
//#A7EBC2 - VERDE CLARO
//#7BB9D1 - AZUL CLARO

export default function App() {
   const [antonLoaded] = useAntonFonts({
    Anton_400Regular,
  });

  const fontsLoaded = antonLoaded;

  if (!fontsLoaded) return null;

  return (
   <SafeAreaView style={styles.container} edges={['bottom', 'top']}>

      <View style={styles.cabecalho}>
        <LinearGradient colors={['#51B2D1', '#87E1AB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFill}> </LinearGradient>

        <View style={styles.conteudo}>
          <Text style={styles.connect}>CONNECT</Text>
          <Image source={require('./assets/splash-icon.png')} style={styles.fotoPerfil} />
        </View>
      </View> 

      <View style={styles.head}>
        <View style={styles.lateral1}>
          <Image source={require('./assets/splash-icon.png')} style={styles.fotoLateral1} />
        </View>

       <View style={styles.lateral2}>
          <Image source={require('./assets/splash-icon.png')} style={styles.fotoLateral1} />
        </View>
      </View>
      
      <SafeAreaView style={styles.safeMenu}>
          <View style={styles.menu}>
            <View style={styles.iconMenu}>
              <Ionicons name="home-outline" size={28} color="#fff"/>
              <Ionicons name="search-outline" size={28} color="#fff" />
              <Ionicons name="add-circle-outline" size={28} color="#fff" />
              <Ionicons name="notifications-outline" size={28} color="#fff" />
              <Ionicons name="person-outline" size={28} color="#fff" />
            </View>
          </View>    
      </SafeAreaView>
         
          
   </SafeAreaView>  
 );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },

  cabecalho:{
    width: '90%',
    height: '20%', 
    borderRadius: 30,
    overflow: 'hidden', 
    justifyContent: 'center', 
    marginLeft: 20,
  },
  
  conteudo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  connect:{
    lineHeight: 60, 
    fontSize: 70,
    fontFamily: 'Anton_400Regular',
  },

  fotoPerfil:{
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff'
  },

  fotoLateral1:{
    width: 45,
    height: 45,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff'
  },

  head: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  lateral1:{
    height: 250,
    width: 75,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#87E1AB'
  },

  lateral2:{
    height: 250,
    width: 75,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#87E1AB',
    marginTop: 7,
  },

  safeMenu: {
    paddingTop: 0.5,
    paddingBottom: 0, 
    position: 'relative',
    bottom: 0,
    width: '100%',
  },

  menu: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
 
  iconMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },

});