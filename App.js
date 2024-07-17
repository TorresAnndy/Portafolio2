// App.js o App.tsx
import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Animated, TouchableOpacity, ScrollView } from 'react-native';
import * as link from './link'; // Importar todas las funciones desde el archivo LinkingUtils
import { globalStyles } from './styles'; // Importar estilos desde el archivo styles.js o styles.ts

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
              style={globalStyles.circularImage}
            />
            <Text style={globalStyles.headerText}>Hola, mi nombre es Andy</Text>
            <Text style={globalStyles.subtitle}>Junior Developer</Text>
          </View>
          {/* Sobre mí */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.sectionTitle}>Sobre mí</Text>
            <Text style={globalStyles.sectionContent}>
              Tengo 21 años, sigo una carrera de Ingenieria en Tecnologias de la Informacion
            </Text>
          </View>

          {/* Áreas de Aspiraciones */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.sectionTitle}>Áreas de Aspiraciones</Text>
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

          <Text style={globalStyles.sectionTitle}>Proyecto</Text>

          {/* Proyecto */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.sectionTitle}>CEOYDESK</Text>
            <View style={globalStyles.project}>
            <TouchableOpacity onPress={link.handleProyectoCeoyDeskPress}>
                <Image
                  source={require('./assets/s.png')}
                  style={globalStyles.projectImgbdd}
                />
              </TouchableOpacity>
              <View style={globalStyles.projectInfo}>
                <Text style={globalStyles.sectionContent}>
                  Sistema de seguridad a nivel empresarial, el cual contiene sistema de seguridad
                  de ingreso, registro vehicular, de la persona, tiempo que ingresa al plantel, sistema de vigilancia
                  24/7, vigilancia aerea con drones
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={link.handleProyectoCeoyDeskPress}>
              <Text style={globalStyles.botonesgithub}>GitHub</Text>
              </TouchableOpacity>
          </View>

          <View style={globalStyles.section}>
            <Text style={globalStyles.sectionTitle}>Acceso a Datos</Text>
            <View style={globalStyles.project}>
            <TouchableOpacity onPress={link.handleProyectoPress}>
                <Image
                  source={require('./assets/BDD.png')}
                  style={globalStyles.projectImgbdd}
                />
              </TouchableOpacity>
            
              <View style={globalStyles.projectInfo}>
                <Text style={globalStyles.sectionContent}>
                  El proyecto permite ingresar, revisar y borrar datos de estudiantes
                  de una universidad almacenando en una base de datos
                </Text>
                
              </View>
            </View>
            <TouchableOpacity onPress={link.handleProyectoPress}>
              <Text style={globalStyles.botonesgithub}>GitHub</Text>
              </TouchableOpacity>
          </View>

          {/* Aprendido */}
            <View style={globalStyles.section}>
              <Text style={globalStyles.sectionTitle}>Aprendizaje</Text>
              
              <View style={globalStyles.contactLinks}>
                <Image
                  source={require('./assets/c.png')}
                  style={globalStyles.lenguajes}
                />
                <Image
                  source={require('./assets/cc.png')}
                  style={globalStyles.lenguajes}
                />
                <Image
                  source={require('./assets/java.png')}
                  style={globalStyles.projectImgcont}
                />
                <Image
                  source={require('./assets/py.png')}
                  style={globalStyles.lenguajes}
                />
              </View>

              <View style={globalStyles.contactLinks}>
                <Image
                  source={require('./assets/js.png')}
                  style={globalStyles.lenguajes}
                />
                <Image
                  source={require('./assets/dc.png')}
                  style={globalStyles.lenguajes}
                />
                <Image
                  source={require('./assets/cisco.png')}
                  style={globalStyles.lenguajescisco}
                />
                <Image
                  source={require('./assets/vs.png')}
                  style={globalStyles.lenguajes}
                />
              </View>

              <View style={globalStyles.contactLinks}>
                <Image
                  source={require('./assets/wk.png')}
                  style={globalStyles.lenguajes}
                />

                <Image
                  source={require('./assets/vsc.png')}
                  style={globalStyles.lenguajes}
                />

                <Image
                  source={require('./assets/linux.png')}
                  style={globalStyles.lenguajes}
                />

                <Image
                  source={require('./assets/ubuntu.png')}
                  style={globalStyles.lenguajes}
                />

              </View>

              <View style={globalStyles.contactLinks}>
              <Image
                  source={require('./assets/eclipse.png')}
                  style={globalStyles.lenguajes}
                />

              </View>

            </View>


          {/* Contacto */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.sectionTitle}>Contacto</Text>
            <View style={globalStyles.contactLinks}>

              <TouchableOpacity onPress={link.handleLinkedInPress}>
                <Image
                  source={require('./assets/Linked.png')}
                  style={globalStyles.projectImgcont}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={link.handleGitHubPress}>
                <Image
                  source={require('./assets/Github.png')}
                  style={globalStyles.projectImgcont}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={link.handlefacebookPress}>
                <Image
                  source={require('./assets/Facebook.png')}
                  style={globalStyles.projectImgcont}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={link.handleinstagramPress}>
                <Image
                  source={require('./assets/Instagram.png')}
                  style={globalStyles.projectImgcont}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
