import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts as useAntonFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Cores
const COLORS = {
  verdeClaro: '#A7EBC2',
  azulClaro: '#7BB9D1',
  azulEscuro: '#263149'
};

export default function App() {
  const [antonLoaded] = useAntonFonts({ Anton_400Regular });
  const fontsLoaded = antonLoaded;
  if (!fontsLoaded) return null;

  return (
    <>
      <SafeAreaView style={styles.container} edges={['bottom', 'top']}>
        <StatusBar barStyle="light-content" />
        <View style={styles.cabecalho}>
          <LinearGradient
            colors={[COLORS.azulClaro, COLORS.verdeClaro]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.conteudo}>
            <Text style={styles.connect}>CONNECT</Text>
          </View>
        </View>

        <View style={styles.head}>
          <ScrollView style={styles.lateralWrapper}>
            {[...Array(5)].map((_, i) => (
              <View
                key={i}
                style={[
                  styles.lateralItem,
                  { marginTop: i === 0 ? 0 : 10 },
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
                    <Image
                      source={require('./assets/splash-icon.png')}
                      style={styles.fotoLateral1}
                    />
                  </ImageBackground>
                ) : (
                  <Image
                    source={require('./assets/splash-icon.png')}
                    style={styles.fotoLateral1}
                  />
                )}
              </View>
            ))}
          </ScrollView>

          <View style={styles.conteudocentro}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 20, paddingBottom: 100 }}
            >
              {[...Array(4)].map((_, rowIndex) => (
                <ScrollView
                  key={rowIndex}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 10 }}
                >
                  {[...Array(5)].map((_, colIndex) => (
                    <View key={colIndex} style={styles.bloco1}>
                      {colIndex === 0 && rowIndex === 0 && (
                        <Image
                          source={require('./assets/splash-icon.png')} 
                          style={styles.fotoPerfilBloco1}
                        />
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
          <Ionicons name="home-outline" size={28} color="#fff" />
          <Ionicons name="search-outline" size={28} color="#fff" />
          <Ionicons name="add-circle-outline" size={28} color="#fff" />
          <Ionicons name="notifications-outline" size={28} color="#fff" />
          <Ionicons name="person-outline" size={28} color="#fff" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    position: 'relative',
    paddingHorizontal: 10,
    height: '100%',
  },

  cabecalho: {
    width: '100%',
    height: '20%',
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
  },

  conteudo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  connect: {
    lineHeight: 60,
    fontSize: 70,
    fontFamily: 'Anton_400Regular',
  },

  fotoPerfilBloco1: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 10,
    alignSelf: 'center',
  },

  fotoLateral1: {
    width: 45,
    height: 45,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: '10%',
  },

  head: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },

  lateralWrapper: {
    width: 80,
  },

  lateralItem: {
    height: 300,
    width: 75,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#87E1AB',
    marginTop: '10%',
  },

  conteudocentro: {
    width: '80%',
    paddingLeft: 10,
  },

  button: {
    position: 'absolute',
  },

  button1: {
    backgroundColor: '#87E1AB',
    width: 45,
    height: 45,
    borderRadius: 22,
    alignItems: 'center',
    marginRight: 15,
    marginTop: 15,
  },

  buttonText: {
    color: '#000',
    fontSize: 30,
  },

  bloco1: {
    width: 270,
    height: 180,
    backgroundColor: '#263149',
    borderRadius: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },

  safeMenu: {
    paddingBottom: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
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
});
