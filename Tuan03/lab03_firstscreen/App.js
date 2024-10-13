import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const MyApp = () => {
  return (
    <View style={styles.container}>
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
    backgroundColor: '#00CCF9'
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#00CCF9'
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
    borderRadius: 10,
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
      fontSize: 15,
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
    
  }
});

export default MyApp;