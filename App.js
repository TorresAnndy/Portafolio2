import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, Linking, ScrollView, Platform, TextInput } from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin');
  };

  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/TorresAnndy');
  };

  const handlefacebookPress = () => {
    Linking.openURL('https://www.facebook.com/andygonzales.gonzalestorres');
  };

  const handleinstagramPress = () => {
    Linking.openURL('https://www.instagram.com/gonzalesangel2003/');
  };

  const handleProyectoPress = () => {
    Linking.openURL('https://github.com/TorresAnndy/AccesoaDatosGonzales2.0');
  };

  const handleProyectoCeoyDeskPress = () => {
    Linking.openURL('https://github.com/TorresAnndy/CeoyDesk');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require('./assets/perfil.png')}
              style={styles.circularImage}
            />
            <Text style={styles.headerText}>Hola, mi nombre es Andy</Text>
            <Text style={styles.subtitle}>Junior Developer</Text>
          </View>
          {/* Sobre mí */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre mí</Text>
            <Text style={styles.sectionContent}>
              Tengo 21 años, sigo una carrera de Ingenieria en Tecnologias de la Informacion
            </Text>
          </View>

          {/* Áreas de Aspiraciones */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Áreas de Aspiraciones</Text>
            <View style={styles.project}>
              <Image
                source={require('./assets/Progra.png')}
                style={styles.projectImage}
              />
              <View style={styles.projectInfo}>
                <Text style={styles.projectDescription}>- Backend</Text>
                <Text style={styles.projectDescription}>- Ciberseguridad</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Proyecto</Text>

          {/* Proyecto */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CEOYDESK</Text>
            <View style={styles.project}>
            <TouchableOpacity onPress={handleProyectoPress}>
                <Image
                  source={require('./assets/s.png')}
                  style={styles.projectImgbdd}
                />
              </TouchableOpacity>
              <View style={styles.projectInfo}>
                <Text style={styles.sectionContent}>
                  Sistema de seguridad a nivel empresarial, el cual contiene sistema de seguridad
                  de ingreso, registro vehicular, de la persona, tiempo que ingresa al plantel, sistema de vigilancia
                  24/7, vigilancia aerea con drones
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleProyectoCeoyDeskPress}>
              <Text style={styles.botonesgithub}>GitHub</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Acceso a Datos</Text>
            <View style={styles.project}>
            <TouchableOpacity onPress={handleProyectoPress}>
                <Image
                  source={require('./assets/BDD.png')}
                  style={styles.projectImgbdd}
                />
              </TouchableOpacity>
            
              <View style={styles.projectInfo}>
                <Text style={styles.sectionContent}>
                  dhuisbdudubsaduibasiudblasidbaisu
                </Text>
                
              </View>
            </View>
            <TouchableOpacity onPress={handleProyectoCeoyDeskPress}>
              <Text style={styles.botonesgithub}>GitHub</Text>
              </TouchableOpacity>
          </View>

          {/* Aprendido */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Lenguajes</Text>
            <View style={styles.contactLinks}>
              <Image
                  source={require('./assets/c.png')}
                  style={styles.lenguajes}
              />
              
                <Image
                  source={require('./assets/cc.png')}
                  style={styles.projectImgcont}
                />

                <Image
                  source={require('./assets/java.png')}
                  style={styles.projectImgcont}
                />
              
                <Image
                  source={require('./assets/py.png')}
                  style={styles.projectImgcont}
                />
            </View>
          </View>

          {/* Contacto */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contacto</Text>
            <View style={styles.contactLinks}>

              <TouchableOpacity onPress={handleLinkedInPress}>
                <Image
                  source={require('./assets/Linked.png')}
                  style={styles.projectImgcont}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleGitHubPress}>
                <Image
                  source={require('./assets/Github.png')}
                  style={styles.projectImgcont}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={handlefacebookPress}>
                <Image
                  source={require('./assets/Facebook.png')}
                  style={styles.projectImgcont}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleinstagramPress}>
                <Image
                  source={require('./assets/Instagram.png')}
                  style={styles.projectImgcont}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 29 : 0,
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circularImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000', 
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginBottom: 21,
  },
  section: {
    marginBottom: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: '#007bff',
    borderRadius: 10,
  },
  sectionTitle: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000', 
  },
  sectionContent: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    color: '#000', 
  },
  
  project: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  projectImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  projectImgcont: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  lenguajes: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  botonesgithub: {
    backgroundColor: '#375ECE',
    marginBottom: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    alignSelf: 'center',
  },
  projectImgbdd: {
    width: 85,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  projectInfo: {
    flex: 1,
  },
  projectDescription: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000', 
  },
  contactLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  contactLink: {
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 5,
  },
  contactLinkText: {
    color: '#007bff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
