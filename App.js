import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Animated, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from './styles'; // Importar estilos desde el archivo styles.js o styles.ts
import Aprendizaje from './aprendizaje'; // Asegúrate de importar el componente correctamente
import Proyectos from './Proyectos';
import Contacto from './Contacto';

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

  return (
    <View style={globalStyles.pagina}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={globalStyles.barra}>
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
          <Contacto/>

        </Animated.View>
      </ScrollView>
    </View>
  );
}
