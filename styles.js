// styles.js
import { StyleSheet, Platform} from 'react-native';

export const globalStyles = StyleSheet.create({
  pagina: {
    backgroundColor: '#fff', 
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  barra: {
    flexGrow: 1,
    padding: 20,
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
    color: '#000', 
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginBottom: 21,
  },
  section: {
    marginBottom: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: '#007bff',
    borderRadius: 10,
  },
  sectionTitle: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000', 
  },
  sectionContent: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    color: '#000', 
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
  projectImgcont: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  lenguajes: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  lenguajescisco: {
    width: 65,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  botonesgithub: {
    backgroundColor: '#375ECE',
    marginBottom: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    alignSelf: 'center',
  },
  projectImgbdd: {
    width: 85,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  projectInfo: {
    flex: 1,
  },
  projectDescription: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000', 
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
});
