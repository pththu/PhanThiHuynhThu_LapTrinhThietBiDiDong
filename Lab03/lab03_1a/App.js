import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const MyApp = () => {
  return (
    <View style={styles.container}>
     <LinearGradient
        // Background Linear Gradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 0.96, 1]}
        style={styles.background}
      />
      <View style={styles.view1}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.view2}>
        <Text style={[styles.text.general, styles.text.grow]}>
          grow {'\n'} your business
        </Text>
      </View>
      <View style={styles.view3}>
        <Text style={[styles.text.general, styles.text.weWill]}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text.general, styles.text.button]}>
            login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text.general, styles.text.button]}>
            sign in
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.text.general, styles.text.howWeWork]}>
        how we work?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 140, 
    height: 140,
    borderWidth: 15,
    borderColor: 'black',
    borderRadius: 100,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#00CCF9',
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  view1: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view2: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    margin: 10,
    width: 120,
    height: 50,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    grow: {
      textAlign: 'center',
      fontSize: 25,
      textTransform: 'uppercase'
    },
    weWill: {
      fontSize: 17,
      textAlign: 'center',
      width: 302
    },
    general: {
      fontFamily: 'Roboto',
      fontWeight: 'bold'
    },
    button: {
      fontSize: 20,
      textTransform: 'uppercase'
    },
    howWeWork: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
    }
  }
});

export default MyApp;