import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, StatusBar, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
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
  const [menuSelecionado, setMenuSelecionado] = useState('Home');
  const [highlightRow, setHighlightRow] = useState(0);
  const [antonLoaded] = useAntonFonts({ Anton_400Regular });
  const fontsLoaded = antonLoaded;
  if (!fontsLoaded) return null;

  return (
    <>
   <SafeAreaView style={styles.container} edges={['bottom', 'top']}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.cabecalho}>
        <LinearGradient colors={['#51B2D1', '#87E1AB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFill}> </LinearGradient>

        <View style={styles.conteudo}>
          <Text style={styles.connect}>CONNECT</Text>
          <Image source={require('./assets/foto1.png')} style={styles.fotoPerfil} />
        </View>
      </View> 

      <View style={styles.head}>
          <ScrollView style={styles.lateralWrapper}>
            {[...Array(5)].map((_, i) => (
              <View
                key={i}
                style={[
                  styles.lateralItem,
                  { marginTop: i === 0 ? 0 : 10 }
                ]}
              >
                {i === 1 ? (
                  <ImageBackground
                    source={require('./assets/paisagem.jpg')}
                    style={styles.imageBackground}
                    imageStyle={{
                       height: 300,
                       width: 75,
                       borderRadius: 20,
                    }}
                  >
                    <Image source={require('./assets/foto2.png')} style={styles.fotoLateral1} />
                  </ImageBackground>
                ) : (
                  <Image source={require('./assets/foto3.png')} style={styles.fotoLateral1} />
                )}
              </View>
            ))}
          </ScrollView>
            
          <View style={styles.conteudocentro}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 5, paddingBottom: 100 }}
            >
              {[...Array(4)].map((_, rowIndex) => (
                <ScrollView
                  key={rowIndex}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 5 }}
                >
                  {[...Array(5)].map((_, colIndex) => (
                    <View key={colIndex} style={styles.bloco1}>
                      {rowIndex === 0 && colIndex === 0 ? (<Image source={require('./assets/foto1.png')} style={styles.perfil} />
                    
                      ) : (
                        <Image source={require('./assets/paisagem2.jpg')} style={styles.cantoQuadrado} />
                      )}
                      
                      <View style={styles.button}>
                          <TouchableOpacity style={styles.button1}>
                            <Text style={styles.buttonText}>+</Text>
                          </TouchableOpacity>
                      </View>
                      
                    </View>
                  ))}
                </ScrollView>
              ))}
            </ScrollView>
          </View>


      </View>
  
   </SafeAreaView> 

   <SafeAreaView style={styles.safeMenu}>
        <View style={styles.iconMenu}>
          <TouchableOpacity onPress={() => setMenuSelecionado('Home')}>
            <Ionicons
              name="home-outline"
              size={28}
              color={menuSelecionado === 'Home' ? '#51B2D1' : '#fff'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMenuSelecionado('Search')}>
            <Ionicons
              name="search-outline"
              size={28}
              color={menuSelecionado === 'Search' ? '#51B2D1' : '#fff'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMenuSelecionado('Create')}>
            <Ionicons
              name="add-circle-outline"
              size={28}
              color={menuSelecionado === 'Create' ? '#51B2D1' : '#fff'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMenuSelecionado('Notifications')}>
            <Ionicons
              name="notifications-outline"
              size={28}
              color={menuSelecionado === 'Notifications' ? '#51B2D1' : '#fff'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMenuSelecionado('Profile')}>
            <Ionicons
              name="person-outline"
              size={28}
              color={menuSelecionado === 'Profile' ? '#51B2D1' : '#fff'}
            />
          </TouchableOpacity>

        </View>
    </SafeAreaView>
    </> 
 );
 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    position: 'relative',
    paddingHorizontal:10,
    height: '100%'
  },

  cabecalho:{
    width: '100%',
    height: '20%', 
    borderRadius: 30,
    overflow: 'hidden', 
    justifyContent: 'center', 
    
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
    borderColor: '#fff',
    marginTop: '10%'
  },

  head: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center' ,
  },


  lateralWrapper: {
    width: 80,
  },

  lateralItem:{
    height: 300,
    width: 75,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#87E1AB',
    marginTop: '10%',
  },

  safeMenu: {
    paddingBottom: 0, 
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '13%',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
 
  iconMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    
  },

  conteudocentro:{
    width: '80%',
    paddingLeft: 5
  },

  button:{
    position: 'absolute',
    
  },

  button1: {
    backgroundColor: '#87E1AB',
    width: 45,
    height: 45,
    borderRadius: 22,
    alignItems: 'center',
    marginRight: 15,
    marginTop: 15
  },
  buttonText: {
    color: '#000',
    fontSize: 30,
  },

  bloco1: {
    width: 290,
    height: 190,
    backgroundColor: '#263149',
    borderRadius: 15,
    alignItems: 'flex-end',
  },

  perfil:{
    width: '90%',
    height: '90%',
    position: 'relative',
    paddingBottom: 0,
    marginTop: '7%',
    left: 30
  },

  cantoQuadrado: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 15,
  },


});
