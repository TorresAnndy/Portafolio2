import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from './styles';
import * as link from './link'; // Asegúrate de importar las funciones necesarias desde link.js

const Proyectos = () => {
  return (
    <View>
      <Text style={globalStyles.titulo}>Proyecto</Text>

      <View style={globalStyles.section}>
        <Text style={globalStyles.titulo}>CEOYDESK</Text>
        <View style={globalStyles.project}>
          <TouchableOpacity onPress={link.handleProyectoCeoyDeskPress}>
            <Image
              source={require('../assets/s.png')}
              style={globalStyles.projectImage}
            />
          </TouchableOpacity>
          <View style={globalStyles.projectInfo}>
            <Text style={globalStyles.sectionContent}>
              Sistema de seguridad a nivel empresarial, el cual contiene sistema de seguridad de ingreso, registro vehicular, de la persona, tiempo que ingresa al plantel, sistema de vigilancia 24/7, vigilancia aérea con drones
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={link.handleProyectoCeoyDeskPress}>
          <Text style={globalStyles.botonesgithub}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <View style={globalStyles.section}>
        <Text style={globalStyles.titulo}>Acceso a Datos</Text>
        <View style={globalStyles.project}>
          <TouchableOpacity onPress={link.handleProyectoPress}>
            <Image
              source={require('../assets/BDD.png')}
              style={globalStyles.projectImgbdd}
            />
          </TouchableOpacity>
          <View style={globalStyles.projectInfo}>
            <Text style={globalStyles.sectionContent}>
              El proyecto permite ingresar, revisar y borrar datos de estudiantes de una universidad almacenando en una base de datos
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={link.handleProyectoPress}>
          <Text style={globalStyles.botonesgithub}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Proyectos;
