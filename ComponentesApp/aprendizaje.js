// aprendizaje.js
import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { globalStyles } from './styles';
import { C, CC, CiscoDocumentacion, DockerDocumentacion, Documentacion, EclipseIde, handleGitHubPress, javadocumentacion, JSDocumentacion, linux, PythonDocumentacion, Ubuntu, VcDocumentacion, vsDocumentacion, WriesharkDocumentacion } from './link';

const Aprendizaje = () => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.titulo}>Aprendizaje</Text>
      
      <View style={globalStyles.contactLinks}>
        <TouchableOpacity onPress={C}>
          <Image
            source={require('../assets/c.png')}
            style={globalStyles.lenguajes}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={CC}>
          <Image
            source={require('../assets/cc.png')}
            style={globalStyles.lenguajes}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={javadocumentacion}>
          <Image
            source={require('../assets/java.png')}
            style={globalStyles.projectImgcont}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={PythonDocumentacion}>
          <Image
            source={require('../assets/py.png')}
            style={globalStyles.lenguajes}
          />
        </TouchableOpacity>
      </View>

      <View style={globalStyles.contactLinks}>

        <TouchableOpacity onPress={JSDocumentacion}>
          <Image
            source={require('../assets/js.png')}
            style={globalStyles.lenguajes}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={DockerDocumentacion}>
          <Image
            source={require('../assets/dc.png')}
            style={globalStyles.lenguajes}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={CiscoDocumentacion}>
          <Image
            source={require('../assets/cisco.png')}
            style={globalStyles.lenguajescisco}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={VcDocumentacion}>
          <Image
            source={require('../assets/vs.png')}
            style={globalStyles.lenguajes}
          />
        </TouchableOpacity>
      </View>

      
      <View style={globalStyles.contactLinks}>

      <TouchableOpacity onPress={WriesharkDocumentacion}>
        <Image
          source={require('../assets/wk.png')}
          style={globalStyles.lenguajes}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={Documentacion}>
        <Image
          source={require('../assets/vsc.png')}
          style={globalStyles.lenguajes}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={linux}>
        <Image
          source={require('../assets/linux.png')}
          style={globalStyles.lenguajes}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={Ubuntu}>
        <Image
          source={require('../assets/ubuntu.png')}
          style={globalStyles.lenguajes}
        />
      </TouchableOpacity>
      </View>

      <View style={globalStyles.contactLinks}>
        <TouchableOpacity onPress={EclipseIde}>
          <Image
            source={require('../assets/eclipse.png')}
            style={globalStyles.lenguajes}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Aprendizaje;
