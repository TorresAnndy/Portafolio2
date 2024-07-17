// Deslizar.js
export const Navegar = (scrollViewRef, section) => {
    // Lógica para desplazar a la sección correspondiente
    switch (section) {
      case 'SobreMi':
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
        break;
      case 'Aspiraciones':
      case 'Proyectos':
      case 'Aprendizaje':
      case 'Contacto':
        scrollViewRef.current.scrollTo({ y: 125, animated: true });
        break;
      default:
        break;
    }
  };
  



/*export const Navegar = (section) => {
        // Lógica para desplazar a la sección correspondiente
        switch (section) {
          case 'SobreMi':
            scrollViewRef.current.scrollTo({ y: 0, animated: true });
            break;
          case 'Aspiraciones':
            scrollViewRef.current.scrollTo({ y: 125, animated: true });
            break;
          case 'Proyectos':
            scrollViewRef.current.scrollTo({ y: 125, animated: true });
            break;
          case 'Aprendizaje':
            scrollViewRef.current.scrollTo({ y: 125, animated: true });
            break;
          case 'Contacto':
            scrollViewRef.current.scrollTo({ y: 125, animated: true });
            break;
          default:
            break;
        }
    }*/