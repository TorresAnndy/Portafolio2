// App.js
import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Animated, ScrollView } from 'react-native';
import { globalStyles } from './ComponentesApp/styles';
import Aprendizaje from './ComponentesApp/aprendizaje';
import Proyectos from './ComponentesApp/Proyectos';
import Contacto from './ComponentesApp/Contacto';
import Menu from './ComponentesApp/menu';
import { Navegar } from './ComponentesApp/Deslizar'; // Importa la función Navegar desde el archivo

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

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

  const handleNavigation = (section) => {
    Navegar(scrollViewRef, section); // Llama a la función Navegar con scrollViewRef y section
  };

  return (
    <View style={globalStyles.pagina}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Menu handleNavigation={handleNavigation} />
      </Animated.View>
      
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={globalStyles.barra}
      >
        <StatusBar style="dark" />
        
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Header */}
          <View style={globalStyles.header}>
            <Image
              source={require('./assets/perfil.png')}
              style={globalStyles.imagencircular}
            />
            <Text style={globalStyles.titulo}>Hola, mi nombre es Andy</Text>
            <Text style={globalStyles.subtitulos}>Junior Developer</Text>
          </View>
          
          {/* Sobre mí */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.titulo}>Sobre mí</Text>
            <Text style={globalStyles.sectionContent}>
              Tengo 21 años, sigo una carrera de Ingeniería en Tecnologías de la Información
            </Text>
          </View>
          
          {/* Áreas de Aspiraciones */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.titulo}>Áreas de Aspiraciones</Text>
            <View style={globalStyles.project}>
              <Image
                source={require('./assets/Progra.png')}
                style={globalStyles.projectImage}
              />
              <View style={globalStyles.projectInfo}>
                <Text style={globalStyles.projectDescription}>- Backend</Text>
                <Text style={globalStyles.projectDescription}>- Ciberseguridad</Text>
              </View>
            </View>
          </View>
          
          {/* Proyectos */}
          <Proyectos />
          
          {/* Componente Aprendizaje */}
          <Aprendizaje />
          
          {/* Contacto */}
          <Contacto />
        </Animated.View>
        
      </ScrollView>
    </View>
  );
}
