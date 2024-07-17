// Deslizar.js
export const Navegar = (scrollViewRef, section) => {
    // Lógica para desplazar a la sección correspondiente
    switch (section) {
      case 'SobreMi':
        scrollViewRef.current.scrollTo({ y: 260, animated: true });
        break;
      case 'Aspiraciones':
        scrollViewRef.current.scrollTo({ y: 860, animated: true });
        break;
      case 'Proyectos':
        scrollViewRef.current.scrollTo({ y: 1450, animated: true });
        break;
      case 'Aprendizaje':
        scrollViewRef.current.scrollTo({ y: 2699, animated: true });
        break;
      case 'Contacto':
        scrollViewRef.current.scrollTo({ y: 3300, animated: true });
        break;
      default:
        break;
    }
  };