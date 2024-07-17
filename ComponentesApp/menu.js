// Menu.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './styles';

const Menu = ({ handleNavigation }) => {
  return (
    <View style={globalStyles.menu}>
      <TouchableOpacity style={globalStyles.menuItemContainer} onPress={() => handleNavigation('SobreMi')}>
        <Text style={globalStyles.menuItem}>Sobre mí</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.menuItemContainer} onPress={() => handleNavigation('Aspiraciones')}>
        <Text style={globalStyles.menuItem}>Áreas de Aspiraciones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.menuItemContainer} onPress={() => handleNavigation('Proyectos')}>
        <Text style={globalStyles.menuItem}>Proyectos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.menuItemContainer} onPress={() => handleNavigation('Aprendizaje')}>
        <Text style={globalStyles.menuItem}>Aprendizaje</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.menuItemContainer} onPress={() => handleNavigation('Contacto')}>
        <Text style={globalStyles.menuItem}>Contacto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
