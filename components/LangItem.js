import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LangItem = ({ lang }) => {
  console.log('Loading logo:', lang.logo);
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image source={lang.logo} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.languageName}>{lang.lang}</Text>
        <Text style={styles.experienceText}>{lang.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#333', 
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  languageName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 10,
  },
  experienceText: {
    fontSize: 16,
    color: '#ccc',
  },
});

export default LangItem;
