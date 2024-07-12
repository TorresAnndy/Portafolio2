import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, Linking, ScrollView, Switch } from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.scrollViewContainer, isDarkMode && styles.darkModeContainer]}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require('./assets/perfil.png')}
              style={styles.circularImage}
            />
            <Text style={[styles.headerText, isDarkMode && styles.darkModeText]}>Hola, mi nombre es Andy</Text>
            <Text style={[styles.subtitle, isDarkMode && styles.darkModeText]}>Estudiante</Text>
          </View>

          {/* Sobre mí */}
          <View style={[styles.section, isDarkMode && styles.darkModeSection]}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.darkModeText]}>Sobre mí</Text>
            <Text style={[styles.sectionContent, isDarkMode && styles.darkModeText]}>
              Estudiante de 3er semestre de Ingenieria en Tecnologias de la Informacion
            </Text>
          </View>

          {/* Proyectos */}
          <View style={[styles.section, isDarkMode && styles.darkModeSection]}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.darkModeText]}>Áreas de Aspiraciones</Text>
            <View style={styles.project}>
              <Image
                source={require('./assets/perfil.png')}
                style={styles.projectImage}
              />
              <View style={styles.projectInfo}>
              <View style={styles.projectInfo}>
              <Text style={[styles.projectDescription, isDarkMode && styles.darkModeText]}>
              - Backend
              </Text>
              <Text style={[styles.projectDescription, isDarkMode && styles.darkModeText]}>
              - Ciberseguridad
              </Text>
            </View>
              </View>
            </View>

            <View style={[styles.section, isDarkMode && styles.darkModeSection]}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.darkModeText]}>Proyecto</Text>
            <View style={styles.project}>
              <Image
                source={require('./assets/perfil.png')}
                style={styles.projectImage}
              />
              <View style={styles.projectInfo}>
              <View style={styles.projectInfo}>
              <Text style={[styles.projectDescription, isDarkMode && styles.darkModeText]}>
              ---CEOYDESK---
              </Text>
              <Text style={[styles.projectDescription, isDarkMode && styles.darkModeText]}>
              Sistema de seguridad a nivel empresarial
              </Text>
            </View>
              </View>
            </View>
          </View>
          </View>

          {/* Contacto */}
          <View style={[styles.section, isDarkMode && styles.darkModeSection]}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.darkModeText]}>Contacto</Text>
            <View style={styles.contactLinks}>
              <TouchableOpacity style={[styles.contactLink, isDarkMode && styles.darkModeButton]} onPress={handleLinkedInPress}>
                <Text style={[styles.contactLinkText, isDarkMode && styles.darkModeButtonText]}>LinkedIn</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.contactLink, isDarkMode && styles.darkModeButton]} onPress={handleGitHubPress}>
                <Text style={[styles.contactLinkText, isDarkMode && styles.darkModeButtonText]}>GitHub</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
        <StatusBar style="auto" />
      </ScrollView>

      {/* Botón de Modo Oscuro */}
      <TouchableOpacity style={styles.darkModeToggle} onPress={toggleDarkMode}>
        <Text style={styles.darkModeToggleText}>{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // Fondo claro por defecto
  },
  darkModeContainer: {
    backgroundColor: '#333', // Fondo oscuro
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
    color: '#000', // Texto oscuro por defecto
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  darkModeSection: {
    backgroundColor: '#444', // Fondo oscuro para secciones
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Texto oscuro por defecto
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 22,
    color: '#000', // Texto oscuro por defecto
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
  projectInfo: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000', // Texto oscuro por defecto
  },
  projectDescription: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000', // Texto oscuro por defecto
  },
  projectLink: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  projectLinkText: {
    color: '#fff',
    textAlign: 'center',
  },
  darkModeButton: {
    backgroundColor: '#555', // Botón oscuro
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
  darkModeButtonText: {
    color: '#fff', // Texto blanco para botones oscuros
  },
  darkModeToggle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 1, // Asegura que el botón esté sobre el contenido desplazable
  },
  darkModeToggleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
