// aprendizaje.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyles } from './styles';

const Aprendizaje = () => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.titulo}>Aprendizaje</Text>
      
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
  );
};

export default Aprendizaje;
