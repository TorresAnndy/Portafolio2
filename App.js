import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, Linking, ScrollView, Platform } from 'react-native';

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
                source={require('./assets/perfil.png')}
                style={styles.projectImage}
              />
              <View style={styles.projectInfo}>
                <Text style={styles.projectDescription}>- Backend</Text>
                <Text style={styles.projectDescription}>- Ciberseguridad</Text>
              </View>
            </View>
          </View>

          {/* Proyecto */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Proyecto</Text>
            <View style={styles.project}>
              <Image
                source={require('./assets/perfil.png')}
                style={styles.projectImage}
              />
              <View style={styles.projectInfo}>
                <Text style={styles.projectDescription}>---CEOYDESK---</Text>
                <Text style={styles.projectDescription}>
                  Sistema de seguridad a nivel empresarial, el cual contiene sistema de seguridad
                  de ingreso, registro veicular, de la persona, tiempo que ingresa al plantel, sistema de vigilancia
                  24/7, vigilancia aerea con drones

                </Text>
              </View>
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

              <TouchableOpacity  onPress={handlefacebookPress}>
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
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },

  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F1EDED', 
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
    borderWidth: 2, // Añade esto para el ancho del borde
    borderColor: '#007bff', // Añade esto para el color del borde
    borderRadius: 10, // Opcional: para esquinas redondeadas
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

