import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, StatusBar, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts as useAntonFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';



//#87E1AB - VERDE 
//#51B2D1 - AZUL CLARINHO
//#263149 - AZUL ESCURO

export default function App() {
  const [menuSelecionado, setMenuSelecionado] = useState('Home');
  const [highlightRow, setHighlightRow] = useState(0);
  const [antonLoaded] = useAntonFonts({ Anton_400Regular });
  const fontsLoaded = antonLoaded;

  const categories = [
    { id: '1', title: 'Comida & Bebida' },
    { id: '2', title: 'Entretenimento' },
    { id: '3', title: 'Atividades Sociais' },
    { id: '4', title: 'Outdoor & Cultural' },
  ];

  const [lateralItems, setLateralItems] = useState(
    Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }))
  );

  const loadMoreItems = () => {
    const nextId = lateralItems.length + 1;
    const novos = Array.from({ length: 5 }, (_, i) => ({ id: String(nextId + i) }));
    setLateralItems([...lateralItems, ...novos]);
  };

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <>
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <StatusBar barStyle="dark-content"/>
        <View style={styles.container}>
          <View style={styles.cabecalho}>
            <Text style={styles.textocabecalho}>Qual vibe gostaria de curtir hoje?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    backgroundColor: '#fff',
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    borderRadius: 20,
                    marginRight: 10,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 0.3, 
                    borderColor: 'black', 
                  }}
                  onPress={() => console.log('Categoria:', item.title)}
                >
                  <Text style={{ color: '#263149', fontWeight: 'bold', fontSize: 15 }}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          
          <View style={styles.head}>
            <FlatList
                data={lateralItems}
                keyExtractor={(item) => item.id}
                renderItem={() => <View style={styles.lateralItem} />}
                contentContainerStyle={{ paddingVertical: 10 }}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                onEndReached={loadMoreItems}
                onEndReachedThreshold={0.1}
              />
                
              <View style={styles.conteudocentro}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ gap: 5, paddingBottom: 160 }}
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
                          {/*{rowIndex === 0 && colIndex === 0 ? (<Image source={require('../assets/images/foto1.png')} style={styles.perfil} />
                        
                          ) : (
                            {/*<Image source={require('../assets/images/paisagem2.jpg')} style={styles.cantoQuadrado} />
                          )}*/}
                          
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

        </View>
    </SafeAreaView> 
    <View style={styles.safeMenu}>
            <View style={styles.iconMenu}>
              <TouchableOpacity onPress={() => setMenuSelecionado('Home')}>
                <Ionicons
                  name="home-outline"
                  size={28}
                  color={menuSelecionado === 'Home' ? '#51B2D1' : '#63625F'}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setMenuSelecionado('Search')}>
                <Ionicons
                  name="search-outline"
                  size={28}
                  color={menuSelecionado === 'Search' ? '#51B2D1' : '#63625F'}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setMenuSelecionado('Create')}>
                <Ionicons
                  name="add-circle-outline"
                  size={28}
                  color={menuSelecionado === 'Create' ? '#51B2D1' : '#63625F'}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setMenuSelecionado('Notifications')}>
                <Ionicons
                  name="notifications-outline"
                  size={28}
                  color={menuSelecionado === 'Notifications' ? '#51B2D1' : '#63625F'}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setMenuSelecionado('Profile')}>
                <Ionicons
                  name="person-outline"
                  size={28}
                  color={menuSelecionado === 'Profile' ? '#51B2D1' : '#63625F'}
                />
              </TouchableOpacity>

            </View>
    </View>
      </> 
    </SafeAreaProvider>
 );
 
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    paddingHorizontal:10,
    justifyContent: 'space-between',
  },

  cabecalho:{
    width: '100%',
    paddingVertical: 15,
  },

  textocabecalho:{
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },

  head: {
    flexDirection: 'row',
    
  },

  lateralItem:{
    height: 75,
    width: 75,
    borderRadius: 37.5,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },

  safeMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    height: 80,
    justifyContent: 'center',
    
  },
 
  iconMenu: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    bottom: 25,
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

  /*perfil:{
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
  },*/


});