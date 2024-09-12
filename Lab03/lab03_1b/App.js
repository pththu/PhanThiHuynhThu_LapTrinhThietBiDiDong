import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

const MyApp = () => {
  return (
    <View style={styles.container}>
     <LinearGradient 
        style={styles.background}
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 0.96, 1]}/>
      <View style={styles.view1}>
        <Image 
          style={styles.image}
          source={require('./assets/lock_01.png')}/>
      </View>
      <View>
        <Text style={[styles.txtGeneral, styles.txtForget]}>
          forget {'\n'} password
        </Text>
      </View>
      <View>
        <Text style={[styles.txtGeneral, styles.txtProvide]}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View style={[styles.viewInput, {}]}>
        <Icon name="mail" size={30} colors="#C4C4C4" style={styles.icon}/>
        <TextInput
          placeholder="Email"
          style={{flex: 1}}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.txtGeneral, styles.txtBtn]}>next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 40,
    backgroundColor: '#00CCF9',
    justifyContent: 'center',
    gap: 50,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  // views
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInput: {
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    padding: 10,
  },
  // images && icons
  image: {
    width: 140,
    height: 150,
  },
  icon: {
    marginEnd: 10,
  },
  // buttons
  button: {
    paddingVertical: 10,
    backgroundColor: "#E3C000",
    alignItems: 'center',
  },
  // texts
  txtForget: {
    textAlign: 'center',
    fontSize: 30,
    textTransform: 'uppercase'
  },
  txtProvide: {
    fontSize: 17,
    textAlign: 'center',
  },
  txtGeneral: {
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  txtBtn: {
    fontSize: 20,
    textTransform: 'uppercase'
  }
});

export default MyApp;