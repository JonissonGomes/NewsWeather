import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#c0e4d5e7',
    flexDirection: "column",
    padding: 0,
    margin: 0,
  },

  background: {
    width: '100%',
    height: '100%',
  },

  title: {
    width: '100%',
    fontSize: 62,
    marginLeft: 125,
    marginRight: 100,
    marginTop: 240,
    color: '#ffed26',
    fontWeight: 'bold',
    textShadowColor: 'rgba(114, 107, 0, 0.75)',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 10,
  },

  titleSub: {
    width: '100%',
    fontSize: 62,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 50,
    color: '#ffed26',
    fontWeight: 'bold',
    textShadowColor: 'rgba(114, 107, 0, 0.75)',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 10,
  },

  inputText: {
    backgroundColor: '#fff',
    height: 40,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
  },

  fakeButton: {
    alignItems: 'center',
    backgroundColor: '#007bffe7',
    padding: 8,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 5,
    marginLeft: 120,
    marginRight: 120,
  },

  textButton: {
    fontSize: 18,
    color: '#fff',
  },

});

export default styles;