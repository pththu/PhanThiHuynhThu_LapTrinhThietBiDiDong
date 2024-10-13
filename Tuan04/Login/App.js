import React, {useState} from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
     <LinearGradient
        // Background Linear Gradient
        colors={['#FBCB00', '#BF9A00']}
        style={styles.background}
      />
      <View style={styles.viewLogin}>
        <Text style={styles.textLogin}>LOGIN</Text>
      </View>
      <View style={styles.viewInput}>
        <View style={styles.textInput}>
          <Image
            source={require('./assets/avatar_user.png')}
            style={styles.image}
          /> 
          <TextInput 
            placeholder="Name"
          />
        </View>
        <View style={styles.textInput}>
          <Image
            source={require('./assets/lock.png')} 
            style={styles.image}
          /> 
          <TextInput style={{flex: 1}}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword}
            activeOpacity={1}>
            <Image style={styles.image}
              source={require('./assets/eye.png')} 
            /> 
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7}>
          <Text style={{
            fontSize: 30,
            textAlign: 'center',
            color: '#fff',
          }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text  
            style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
            textAlign: 'center',
            }}>
            Forgot your password?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    gap: 50
  }, 
  viewLogin:{
    width: "100%"
  },
  viewInput: {
    width: "100%",
  },
  viewButton: {
    width: "100%"

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  textLogin: {
    fontSize: 50,
  },
  textInput: {
    marginTop: 10,
    padding: 10,
    height: 60,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    flexDirection: 'row',
    backgroundColor: '#C4C4C44D',

  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 2,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  }
});